const FirebaseRepository = require('./firebaseRepository');
const AuditLogRepository = require('./auditLogRepository');
const admin = require('firebase-admin');
const lodash = require('lodash');
const FirebaseQuery = require('../utils/firebaseQuery');
const User = require('../models/user');
const crypto = require('crypto');

/**
 * Handles database operations for Users.
 */
module.exports = class UserRepository {
  /**
   * Creates a User.
   */
  static async create(data, options) {
    data = this._preSave(data);
    data = new User().cast(data);

    const user = {
      id: this.generateId(data),
      ...data,
      createdBy: FirebaseRepository.getCurrentUser(options)
        .id,
      createdAt: FirebaseRepository.serverTimestamp(),
      updatedBy: FirebaseRepository.getCurrentUser(options)
        .id,
      updatedAt: FirebaseRepository.serverTimestamp(),
    };

    await FirebaseRepository.executeOrAddToBatch(
      'set',
      admin.firestore().doc(`user/${user.id}`),
      user,
      options,
    );

    await AuditLogRepository.log(
      {
        entityName: 'user',
        entityId: user.id,
        action: AuditLogRepository.CREATE,
        values: user,
      },
      options,
    );

    return user;
  }

  /**
   * Creates the user based on the auth information.
   *
   * @param {*} data
   * @param {*} [options]
   */
  static async createFromAuth(data, options) {
    data = this._preSave(data);
    data = new User().cast(data);

    const user = {
      id: this.generateId(data),
      email: data.email,
      firstName: data.firstName,
      fullName: data.fullName,
      authenticationUid: data.authenticationUid,
      roles: data.roles || [],
      disabled: false,
      createdAt: FirebaseRepository.serverTimestamp(),
      updatedAt: FirebaseRepository.serverTimestamp(),
    };

    await FirebaseRepository.executeOrAddToBatch(
      'set',
      admin.firestore().doc(`user/${user.id}`),
      user,
      options,
    );

    await AuditLogRepository.log(
      {
        entityName: 'user',
        entityId: user.id,
        action: AuditLogRepository.CREATE,
        values: user,
      },
      options,
    );

    return user;
  }

  /**
   * Updates the profile of the user.
   *
   * @param {*} id
   * @param {*} data
   * @param {*} [options]
   */
  static async updateProfile(id, data, options) {
    data = this._preSave(data);
    data = new User().cast(data);

    const user = {
      id,
      firstName: data.firstName || null,
      lastName: data.lastName || null,
      fullName: data.fullName || null,
      phoneNumber: data.phoneNumber || null,
      avatars: data.avatars || [],
      updatedBy: FirebaseRepository.getCurrentUser(options)
        .id,
      updatedAt: FirebaseRepository.serverTimestamp(),
    };

    await FirebaseRepository.executeOrAddToBatch(
      'update',
      admin.firestore().doc(`user/${user.id}`),
      user,
      options,
    );

    await AuditLogRepository.log(
      {
        entityName: 'user',
        entityId: id,
        action: AuditLogRepository.UPDATE,
        values: user,
      },
      options,
    );

    return user;
  }

  /**
   * Updates the authentication uid.
   *
   * @param {*} id
   * @param {*} authenticationUid
   * @param {*} [options]
   */
  static async updateAuthenticationUid(
    id,
    authenticationUid,
    options,
  ) {
    const user = {
      id,
      authenticationUid,
      updatedBy: FirebaseRepository.getCurrentUser(options)
        .id,
      updatedAt: FirebaseRepository.serverTimestamp(),
    };

    await FirebaseRepository.executeOrAddToBatch(
      'update',
      admin.firestore().doc(`user/${user.id}`),
      user,
      options,
    );

    await AuditLogRepository.log(
      {
        entityName: 'user',
        entityId: id,
        action: AuditLogRepository.UPDATE,
        values: {
          id,
          authenticationUid,
        },
      },
      options,
    );

    return user;
  }

  /**
   * Updates the status of the user: Disabled or Enabled.
   *
   * @param {*} id
   * @param {*} disabled
   * @param {*} [options]
   */
  static async updateStatus(id, disabled, options) {
    const user = {
      id,
      disabled,
      updatedBy: FirebaseRepository.getCurrentUser(options)
        .id,
      updatedAt: FirebaseRepository.serverTimestamp(),
    };

    await FirebaseRepository.executeOrAddToBatch(
      'update',
      admin.firestore().doc(`user/${user.id}`),
      user,
      options,
    );

    await AuditLogRepository.log(
      {
        entityName: 'user',
        entityId: id,
        action: AuditLogRepository.UPDATE,
        values: {
          id,
          disabled,
        },
      },
      options,
    );

    return user;
  }

  /**
   * Updates the roles of the user.
   *
   * @param {*} id
   * @param {*} roles
   * @param {*} [options]
   */
  static async updateRoles(id, roles, options) {
    const user = await this.findById(id);

    if (options.addRoles) {
      user.roles = [...user.roles, ...roles];
    } else if (options.removeOnlyInformedRoles) {
      user.roles = lodash.difference(user.roles, roles);
    } else {
      user.roles = roles;
    }

    await FirebaseRepository.executeOrAddToBatch(
      'update',
      admin.firestore().doc(`user/${id}`),
      {
        roles: user.roles,
      },
      options,
    );

    await AuditLogRepository.log(
      {
        entityName: 'user',
        entityId: user.id,
        action: AuditLogRepository.UPDATE,
        values: {
          roles: user.roles,
        },
      },
      options,
    );

    return user;
  }

  /**
   * Updates a User.
   *
   * @param {*} id
   * @param {*} data
   * @param {*} [options]
   */
  static async update(id, data, options) {
    data = this._preSave(data);
    data = new User().cast(data);

    const user = {
      id,
      firstName: data.firstName || null,
      lastName: data.lastName || null,
      fullName: data.fullName || null,
      phoneNumber: data.phoneNumber || null,
      avatars: data.avatars || [],
      roles: data.roles || [],
      updatedBy: FirebaseRepository.getCurrentUser(options)
        .id,
      updatedAt: FirebaseRepository.serverTimestamp(),
    };

    await FirebaseRepository.executeOrAddToBatch(
      'update',
      admin.firestore().doc(`user/${user.id}`),
      user,
      options,
    );

    await AuditLogRepository.log(
      {
        entityName: 'user',
        entityId: id,
        action: AuditLogRepository.UPDATE,
        values: user,
      },
      options,
    );

    return user;
  }

  /**
   * Finds the user by email.
   *
   * @param {*} email
   * @param {*} [options]
   */
  static async findByEmail(email, options) {
    const collection = await admin
      .firestore()
      .collection(`user`)
      .where('email', '==', email)
      .limit(1)
      .get();

    const users = FirebaseRepository.mapCollection(
      collection,
    );

    if (users.length) {
      return users[0];
    }

    return null;
  }

  /**
   * Find the user by email, but without fetching the avatar.
   *
   * @param {*} email
   * @param {*} [options]
   */
  static async findByEmailWithoutAvatar(email, options) {
    return this.findByEmail(email, options);
  }

  /**
   * Finds the user based on the query.
   *
   * @param {Object} query
   * @param {Object} query.filter
   * @param {number} query.limit
   * @param  {number} query.offset
   * @param  {string} query.orderBy
   *
   * @returns {Promise<Object>} response - Object containing the rows and the count.
   */
  static async findAllWithCount(
    { filter, limit, offset, orderBy } = {
      filter: null,
      limit: 0,
      offset: 0,
      orderBy: null,
    },
    options,
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

      if (filter.fullName) {
        query.appendIlike('fullName', filter.fullName);
      }

      if (filter.email) {
        query.appendIlike('email', filter.email);
      }

      if (filter.role) {
        query.appendIn('roles', filter.role);
      }

      if (filter.status) {
        const disabled = filter.status === 'disabled';
        query.appendEqual('disabled', disabled);
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
      .collection(`user`)
      .get();

    const all = FirebaseRepository.mapCollection(
      collection,
    );
    const rows = query.rows(all);
    const count = query.count(all);

    return { rows, count };
  }

  /**
   * Lists the users to populate the autocomplete.
   *
   * @param {Object} search
   * @param {number} limit
   */
  static async findAllAutocomplete(search, limit) {
    const query = FirebaseQuery.forAutocomplete({
      limit,
      orderBy: 'fullName_ASC',
    });

    if (search) {
      query.appendId('id', search);
      query.appendIlike('fullName', search);
      query.appendIlike('email', search);
    }

    const collection = await admin
      .firestore()
      .collection(`user`)
      .get();

    const all = FirebaseRepository.mapCollection(
      collection,
    );
    const rows = query.rows(all);

    const buildText = (user) => {
      if (!user.fullName) {
        return user.email;
      }

      return `${user.fullName} <${user.email}>`;
    };

    return rows.map((user) => ({
      id: user.id,
      label: buildText(user),
    }));
  }

  /**
   * Finds the user and all its relations.
   *
   * @param {string} id
   */
  static async findById(id) {
    return FirebaseRepository.findDocument('user', id);
  }

  /**
   * Finds the user, without fetching the avatar.
   *
   * @param {string} id
   */
  static async findByIdWithoutAvatar(id) {
    return this.findById(id);
  }

  /**
   * Finds the users with the ids and filters based on the disabled flag.
   *
   * @param {*} ids
   * @param {*} disabled
   */
  static async findAllByDisabled(ids, disabled) {
    const users = await FirebaseRepository.findDocuments(
      'user',
      ids,
    );

    return users.filter(
      (user) => !!user.disabled === !!disabled,
    );
  }

  /**
   * Counts the users based on the filter.
   *
   * @param {*} [filter]
   * @param {*} [options]
   */
  static async count(filter, options) {
    let chain = admin.firestore().collection('user');

    if (filter) {
      Object.keys(filter).forEach((key) => {
        chain = chain.where(key, '==', filter[key]);
      });
    }

    return (await chain.get()).size;
  }

  /**
   * Normalize the user fields.
   *
   * @param {*} data
   */
  static _preSave(data) {
    if (data.firstName || data.lastName) {
      data.fullName = `${(data.firstName || '').trim()} ${(
        data.lastName || ''
      ).trim()}`.trim();
    }

    data.email = data.email ? data.email.trim() : null;

    data.firstName = data.firstName
      ? data.firstName.trim()
      : null;

    data.lastName = data.lastName
      ? data.lastName.trim()
      : null;

    return data;
  }

  /**
   * Generates a new ID based on the email (unique).
   *
   * @param {*} data
   */
  static generateId(data) {
    if (!data || !data.email) {
      return FirebaseRepository.newId();
    }

    return crypto
      .createHash('md5')
      .update(data.email)
      .digest('hex');
  }
};
