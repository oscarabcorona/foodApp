const admin = require('firebase-admin');
const lodash = require('lodash');

/**
 * Abstracts some basic Firestore operations. 
 */
module.exports = class FirebaseRepository {
  /**
   * Cleans the database.
   */
  static async cleanDatabase() {
    throw new Error('Not implemented');
  }

  /**
   * Creates a new Firestore ID.
   */
  static newId() {
    return admin
      .firestore()
      .collection(`ids`)
      .doc().id;
  }

  /**
   * Creates a server timestamp.
   */
  static serverTimestamp() {
    return admin.firestore.FieldValue.serverTimestamp();
  }

  /**
   * Finds a document relation. Collection or Doc.
   *
   * @param {*} collectionName
   * @param {*} value
   */
  static async findRelation(collectionName, value) {
    if (!value) {
      return value;
    }

    if (Array.isArray(value)) {
      return this.findDocuments(collectionName, value);
    }

    return this.findDocument(collectionName, value);
  }

  /**
   * Finds a document.
   *
   * @param {*} collectionName
   * @param {*} id
   */
  static async findDocument(collectionName, id) {
    return this.mapDocument(
      await admin
        .firestore()
        .doc(`${collectionName}/${id}`)
        .get(),
    );
  }

  /**
   * Finds several documents.
   *
   * @param {*} collectionName
   * @param {*} ids
   */
  static async findDocuments(collectionName, ids) {
    return Promise.all(
      ids.map((id) =>
        this.findDocument(collectionName, id),
      ),
    );
  }

  /**
   * Returns the currentUser if it exists on the options.
   *
   * @param {object} options
   */
  static getCurrentUser(options) {
    return (options && options.currentUser) || { id: null };
  }

  /**
   * Returns the current batch if it exists on the options.
   *
   * @param {object} options
   */
  static getBatch(options) {
    return (options && options.batch) || undefined;
  }

  /**
   * Creates a Firestore Batch.
   */
  static async createBatch() {
    return admin.firestore().batch();
  }

  /**
   * Commits the current batch.
   */
  static async commitBatch(batch) {
    return batch.commit();
  }

  /**
   * Executes if no batch is informed.
   * Adds to the batch if it exists.
   */
  static async executeOrAddToBatch(
    operation,
    document,
    data,
    options,
  ) {
    const batch = this.getBatch(options);

    if (batch) {
      if (operation !== 'delete') {
        batch[operation](document, data);
      } else {
        batch[operation](document);
      }
      return;
    }

    if (operation !== 'delete') {
      return document[operation](data);
    } else {
      return document[operation];
    }
  }

  /**
   * Maps collection documents.
   * Adds the ID and replaces timestamps to date.
   */
  static mapCollection(collection) {
    if (collection.empty) {
      return [];
    }

    const list = [];

    collection.forEach((document) => {
      const item = Object.assign({}, document.data(), {
        id: document.id,
      });

      this.replaceAllTimestampToDate(item);
      list.push(item);
    });

    return list;
  }

  /**
   * Maps a document.
   * Adds the ID and replaces timestamps to date.
   */
  static mapDocument(document) {
    if (!document.exists) {
      return null;
    }

    const item = Object.assign({}, document.data(), {
      id: document.id,
    });

    this.replaceAllTimestampToDate(item);

    return item;
  }

  /**
   * Replaces all Firestore timestamps to Date.
   */
  static replaceAllTimestampToDate(arg) {
    if (!arg) {
      return arg;
    }

    Object.keys(arg).forEach((key) => {
      if (
        arg[key] &&
        arg[key] instanceof admin.firestore.Timestamp
      ) {
        arg[key] = arg[key].toDate();
      }
    });
  }

  /**
   * Converts the value to Firestore Timestamp if it's not.
   *
   * @param {*} value
   */
  static convertToTimestampIfIsNot(value) {
    if (!value) {
      return value;
    }

    if (!(value instanceof admin.firestore.Timestamp)) {
      if (lodash.isNumber(value)) {
        return admin.firestore.Timestamp.fromMillis(value);
      }

      if (lodash.isDate(value)) {
        return admin.firestore.Timestamp.fromDate(value);
      }

      throw new Error(`Error adding audition fields!`);
    }

    return value;
  }

  /**
   * In the case of a two way relationship, both records from both collections
   * must be in sync.
   * This method ensures it for Many to One relations.
   *
   * @param {*} record
   * @param {*} sourceCollectionName
   * @param {*} sourceProperty
   * @param {*} targetCollectionName
   * @param {*} targetProperty
   * @param {*} options
   */
  static async refreshTwoWayRelationManyToOne(
    record,
    sourceCollectionName,
    sourceProperty,
    targetCollectionName,
    targetProperty,
    options,
  ) {
    async function removeInOtherRecordsSameType() {
      const sourceCollection = await admin
        .firestore()
        .collection(sourceCollectionName)
        .get();

      const promises = sourceCollection.docs.map(
        async (doc) => {
          const currentRecord = doc.id === record.id;
          const notContainValue =
            !doc.get(sourceProperty) ||
            !doc
              .get(sourceProperty)
              .some((itemA) =>
                record[sourceProperty].some(
                  (itemB) => itemA === itemB,
                ),
              );

          if (currentRecord || notContainValue) {
            return;
          }

          const recordValuesRemoved = lodash.difference(
            doc.get(sourceProperty),
            record[sourceProperty],
          );

          await FirebaseRepository.executeOrAddToBatch(
            'update',
            doc.ref,
            {
              [sourceProperty]: recordValuesRemoved,
            },
            options,
          );
        },
      );

      return Promise.all(promises);
    }

    async function refreshRelations() {
      const targetCollection = await admin
        .firestore()
        .collection(targetCollectionName)
        .get();

      const promises = targetCollection.docs.map(
        async (doc) => {
          const isRelation =
            record[sourceProperty] &&
            record[sourceProperty].includes(doc.id);

          if (isRelation) {
            await FirebaseRepository.executeOrAddToBatch(
              'update',
              doc.ref,
              {
                [targetProperty]: record.id,
              },
              options,
            );
          }

          if (!isRelation) {
            if (doc.get(targetProperty) === record.id) {
              await FirebaseRepository.executeOrAddToBatch(
                'update',
                doc.ref,
                {
                  [targetProperty]: null,
                },
                options,
              );
            }
          }
        },
      );

      return Promise.all(promises);
    }

    await removeInOtherRecordsSameType();
    await refreshRelations();
  }

  /**
   * In the case of a two-way relationship, both records from
   * both collections must be in sync.
   * This method ensures it for One to One relations.
   *
   * @param {*} record
   * @param {*} sourceProperty
   * @param {*} targetCollectionName
   * @param {*} targetProperty
   * @param {*} options
   */
  static async refreshTwoWayRelationOneToMany(
    record,
    sourceProperty,
    targetCollectionName,
    targetProperty,
    options,
  ) {
    async function addRelationToTarget() {
      if (!record[sourceProperty]) {
        return;
      }

      await FirebaseRepository.executeOrAddToBatch(
        'update',
        admin
          .firestore()
          .doc(
            `${targetCollectionName}/${record[sourceProperty]}`,
          ),
        {
          [targetProperty]: admin.firestore.FieldValue.arrayUnion(
            record.id,
          ),
        },
        options,
      );
    }

    async function removeRelationOldTargets() {
      const targetCollection = await admin
        .firestore()
        .collection(targetCollectionName)
        .where(targetProperty, 'array-contains', record.id)
        .get();

      const promises = targetCollection.docs.map(
        async (doc) => {
          if (doc.id === record[sourceProperty]) {
            return;
          }

          await FirebaseRepository.executeOrAddToBatch(
            'update',
            doc.ref,
            {
              [targetProperty]: admin.firestore.FieldValue.arrayRemove(
                record.id,
              ),
            },
            options,
          );
        },
      );

      return Promise.all(promises);
    }

    await addRelationToTarget();
    await removeRelationOldTargets();
  }

  /**
   * In the case of a two-way relationship, both records from
   * both collections must be in sync.
   * This method ensures it for Many to Many relations.
   *
   * @param {*} record
   * @param {*} sourceProperty
   * @param {*} targetCollectionName
   * @param {*} targetProperty
   * @param {*} options
   */
  static async refreshTwoWayRelationManyToMany(
    record,
    sourceProperty,
    targetCollectionName,
    targetProperty,
    options,
  ) {
    const targetCollection = await admin
      .firestore()
      .collection(targetCollectionName)
      .get();

    const promises = targetCollection.docs.map(
      async (doc) => {
        const isRelated =
          record[sourceProperty] &&
          record[sourceProperty].includes(doc.id);

        if (isRelated) {
          await FirebaseRepository.executeOrAddToBatch(
            'update',
            doc.ref,
            {
              [targetProperty]: admin.firestore.FieldValue.arrayUnion(
                record.id,
              ),
            },
            options,
          );
        }

        if (!isRelated) {
          if (
            doc.get(targetProperty) &&
            doc.get(targetProperty).includes(record.id)
          ) {
            await FirebaseRepository.executeOrAddToBatch(
              'update',
              doc.ref,
              {
                [targetProperty]: admin.firestore.FieldValue.arrayRemove(
                  record.id,
                ),
              },
              options,
            );
          }
        }
      },
    );

    return Promise.all(promises);
  }

  /**
   * If the record is referenced on other collection,
   * clears the referece from the other collection.
   * This method handles the relatino to many.
   *
   * @param {*} recordId
   * @param {*} targetCollectionName
   * @param {*} targetProperty
   * @param {*} options
   */
  static async destroyRelationToMany(
    recordId,
    targetCollectionName,
    targetProperty,
    options,
  ) {
    const collection = await admin
      .firestore()
      .collection(targetCollectionName)
      .where(targetProperty, 'array-contains', recordId)
      .get();

    if (collection.empty) {
      return;
    }

    await FirebaseRepository.executeOrAddToBatch(
      'update',
      collection.docs[0].ref,
      {
        [targetProperty]: admin.firestore.FieldValue.arrayRemove(
          recordId,
        ),
      },
      options,
    );
  }

  /**
   * If the record is referenced on other collection,
   * clears the referece from the other collection.
   * This method handles the relatino to one.
   *
   * @param {*} recordId
   * @param {*} targetCollectionName
   * @param {*} targetProperty
   * @param {*} options
   */
  static async destroyRelationToOne(
    recordId,
    targetCollectionName,
    targetProperty,
    options,
  ) {
    const collection = await admin
      .firestore()
      .collection(targetCollectionName)
      .where(targetProperty, '==', recordId)
      .get();

    if (collection.empty) {
      return;
    }

    await FirebaseRepository.executeOrAddToBatch(
      'update',
      collection.docs[0].ref,
      {
        [targetProperty]: null,
      },
      options,
    );
  }
};
