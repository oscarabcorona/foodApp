const FirebaseRepository = require('./firebaseRepository');
const admin = require('firebase-admin');
const FirebaseQuery = require('../utils/firebaseQuery');

/**
 * Handles database operations for Audit Logs.
 */
module.exports = class AuditLogRepository {
  static get CREATE() {
    return 'create';
  }
  static get UPDATE() {
    return 'update';
  }
  static get DELETE() {
    return 'delete';
  }

  /**
   * Saves an Audit Log to the database.
   *
   * @param  {Object} log - The log being saved.
   * @param  {string} log.entityName - The name of the entity. Ex.: customer
   * @param  {string} log.entityId - The id of the entity.
   * @param  {string} log.action - The action [create, update or delete].
   * @param  {Object} log.values - The JSON log value with data of the entity.
   *
   * @param  {Object} options
   * @param  {Object} options.batch - The current database batch.
   * @param  {Object} options.currentUser - The current logged user.
   */
  static async log(
    { entityName, entityId, action, values },
    options,
  ) {
    const log = {
      id: FirebaseRepository.newId(),
      entityName,
      entityId,
      action,
      values,
      timestamp: new Date(),
      createdById:
        options && options.currentUser
          ? options.currentUser.id
          : null,
      createdByEmail:
        options && options.currentUser
          ? options.currentUser.email
          : null,
    };

    await FirebaseRepository.executeOrAddToBatch(
      'set',
      admin.firestore().doc(`auditLogs/${log.id}`),
      log,
      options,
    );

    return log;
  }

  /**
   * Finds the Audit Logs based on the query.
   *
   * @param {Object} query
   * @param {Object} query.filter
   * @param {number} query.limit
   * @param  {number} query.offset
   * @param  {string} query.orderBy
   *
   * @returns {Promise<Object>} response - Object containing the rows and the count.
   */
  static async findAndCountAll({
    filter,
    limit = 0,
    offset = 0,
    orderBy = null,
  }) {
    const query = FirebaseQuery.forList({
      limit,
      offset,
      orderBy: orderBy || 'createdAt_DESC',
    });

    if (filter) {
      if (filter.timestampRange) {
        query.appendRange(
          'timestamp',
          filter.timestampRange,
        );
      }

      if (filter.action) {
        query.appendEqual('action', filter.action);
      }

      if (filter.entityId) {
        query.appendEqual('entityId', filter.entityId);
      }

      if (filter.createdByEmail) {
        query.appendIlike(
          'createdByEmail',
          filter.createdByEmail,
        );
      }

      if (filter.entityNames && filter.entityNames.length) {
        query.appendIn('entityName', filter.entityNames);
      }
    }

    const collection = await admin
      .firestore()
      .collection(`auditLogs`)
      .get();

    const all = FirebaseRepository.mapCollection(
      collection,
    );
    const rows = query.rows(all);
    const count = query.count(all);

    return { rows, count };
  }
};
