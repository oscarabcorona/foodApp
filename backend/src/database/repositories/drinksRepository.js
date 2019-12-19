const FirebaseRepository = require('./firebaseRepository');
const admin = require('firebase-admin');
const FirebaseQuery = require('../utils/firebaseQuery');
const Drinks = require('../models/drinks');
const AuditLogRepository = require('./auditLogRepository');

/**
 * Handles database operations for the Drinks
 */
class DrinksRepository {
  /**
   * Creates the Drinks
   *
   * @param {Object} data
   * @param {Object} [options]
   */
  async create(data, options) {
    const record = {
      id: FirebaseRepository.newId(),
      ...new Drinks().cast(data),
      createdBy: FirebaseRepository.getCurrentUser(options)
        .id,
      createdAt: FirebaseRepository.serverTimestamp(),
      updatedBy: FirebaseRepository.getCurrentUser(options)
        .id,
      updatedAt: FirebaseRepository.serverTimestamp(),
    };

    await FirebaseRepository.executeOrAddToBatch(
      'set',
      admin
        .firestore()
        .doc(
          `${new Drinks().collectionName}/${record.id}`,
        ),
      record,
      options,
    );

    await this._createAuditLog(
      AuditLogRepository.CREATE,
      record.id,
      data,
      options,
    );



    return record;
  }

  /**
   * Updates the Drinks
   *
   * @param {Object} data
   * @param {Object} [options]
   */
  async update(id, data, options) {
    const record = {
      id,
      ...new Drinks().cast(data),
      updatedBy: FirebaseRepository.getCurrentUser(options)
        .id,
      updatedAt: FirebaseRepository.serverTimestamp(),
    };

    await FirebaseRepository.executeOrAddToBatch(
      'update',
      admin
        .firestore()
        .doc(
          `${new Drinks().collectionName}/${record.id}`,
        ),
      record,
      options,
    );

    await this._createAuditLog(
      AuditLogRepository.UPDATE,
      id,
      data,
      options,
    );



    return record;
  }

  /**
   * Deletes the Drinks
   *
   * @param {string} id
   * @param {Object} [options]
   */
  async destroy(id, options) {
    await FirebaseRepository.executeOrAddToBatch(
      'delete',
      admin
        .firestore()
        .doc(`${new Drinks().collectionName}/${id}`),
      null,
      options,
    );

    await this._createAuditLog(
      AuditLogRepository.DELETE,
      id,
      null,
      options,
    );

    await FirebaseRepository.destroyRelationToMany(
      id,
      'restaurant',
      'products',
      options,
    );

    await FirebaseRepository.destroyRelationToOne(
      id,
      'product',
      'drinks',
      options,
    );

    await FirebaseRepository.destroyRelationToOne(
      id,
      'order',
      'drinks',
      options,
    );

    await FirebaseRepository.destroyRelationToMany(
      id,
      'bar',
      'drinks',
      options,
    );

    await FirebaseRepository.destroyRelationToMany(
      id,
      'kitchen',
      'drinks',
      options,
    );

    await FirebaseRepository.destroyRelationToMany(
      id,
      'checkOut',
      'drinks',
      options,
    );

    await FirebaseRepository.destroyRelationToOne(
      id,
      'sell',
      'drinks',
      options,
    );
  }

  /**
   * Counts the number of Drinks based on the filter.
   *
   * @param {Object} filter
   */
  async count(filter) {
    let chain = admin
      .firestore()
      .collection(new Drinks().collectionName);

    if (filter) {
      Object.keys(filter).forEach((key) => {
        chain = chain.where(key, '==', filter[key]);
      });
    }

    return (await chain.get()).size;
  }

  /**
   * Finds the Drinksand its relations.
   *
   * @param {string} id
   */
  async findById(id) {
    const record = await FirebaseRepository.findDocument(
      'drinks',
      id,
    );
    return this.populate(record);
  }

  /**
   * Finds the Drinks based on the query. 
   *
   * @param {Object} query
   * @param {Object} query.filter
   * @param {number} query.limit
   * @param  {number} query.offset
   * @param  {string} query.orderBy
   *
   * @returns {Promise<Object>} response - Object containing the rows and the count.
   */
  async findAndCountAll(
    { filter, limit, offset, orderBy } = {
      filter: null,
      limit: 0,
      offset: 0,
      orderBy: null,
    },
  ) {
    const query = FirebaseQuery.forList({
      limit,
      offset,
      orderBy: orderBy || 'createdAt_DESC',
    });

    if (filter) {
      if (filter.id) {
        query.appendId('id', filter.id);
      }

      if (filter.restaurant) {
        query.appendId('restaurant', filter.restaurant);
      }

      if (filter.name) {
        query.appendIlike('name', filter.name);
      }

      if (filter.createdAtRange) {
        query.appendRange(
          'createdAt',
          filter.createdAtRange,
        );
      }
    }

    const collection = await admin
      .firestore()
      .collection(`drinks`)
      .get();

    const all = FirebaseRepository.mapCollection(
      collection,
    );
    const rows = await this.populateAll(query.rows(all));
    const count = query.count(all);

    return { rows, count };
  }

  /**
   * Lists the Drinks to populate the autocomplete. 
   *
   * @param {Object} search
   * @param {number} limit
   */
  async findAllAutocomplete(search, limit) {
    const query = FirebaseQuery.forAutocomplete({
      limit,
      orderBy: 'name_ASC',
    });

    if (search) {
      query.appendId('id', search);
      query.appendIlike('name', search);
    }

    const collection = await admin
      .firestore()
      .collection(`drinks`)
      .get();

    const all = FirebaseRepository.mapCollection(
      collection,
    );
    const rows = query.rows(all);

    return rows.map((record) => ({
      id: record.id,
      label: record['name'],
    }));
  }

  /**
   * Populates the records with all its relations.
   * @param {*} records
   */
  async populateAll(records) {
    return await Promise.all(
      records.map((record) => this.populate(record)),
    );
  }

  /**
   * Populates the record with all its relations.
   * @param {*} record
   */
  async populate(record) {
    if (!record) {
      return record;
    }

    record.restaurant = await FirebaseRepository.findRelation(
      'restaurant',
      record.restaurant,
    );

    return record;
  }

  /**
   * Creates an audit log of the operation.
   *
   * @param {string} action - The action [create, update or delete].
   * @param {object} id - The record id
   * @param {object} data - The new data passed on the request
   * @param {object} options
   */
  async _createAuditLog(action, id, data, options) {
    await AuditLogRepository.log(
      {
        entityName: new Drinks().modelName,
        entityId: id,
        action,
        values: data,
      },
      options,
    );
  }
}

module.exports = DrinksRepository;
