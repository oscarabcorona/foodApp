const admin = require('firebase-admin');
const FirebaseRepository = require('./firebaseRepository');
const AuditLogRepository = require('./auditLogRepository');
const Settings = require('../models/settings');

/**
 * Handles database operations for Settings.
 */
module.exports = class SettingsRepository {
  /**
   * Finds the settings or creates and returns the default.
   *
   * @param {*} defaults
   * @param {*} [options]
   */
  static async findOrCreateDefault(defaults, options) {
    const first = await FirebaseRepository.findDocument(
      new Settings().collectionName,
      'default',
    );

    if (first) {
      return first;
    }

    const settings = {
      id: 'default',
      ...defaults,
    };

    await FirebaseRepository.executeOrAddToBatch(
      'set',
      admin.firestore().doc(`settings/default`),
      settings,
      options,
    );

    return settings;
  }

  /**
   * Saves the settings.
   *
   * @param {*} data
   * @param {*} [options]
   */
  static async save(data, options) {
    data = new Settings().cast(data);

    await FirebaseRepository.executeOrAddToBatch(
      'update',
      admin
        .firestore()
        .doc(`${new Settings().collectionName}/default`),
      data,
      options,
    );

    await AuditLogRepository.log(
      {
        entityName: 'settings',
        entityId: 'default',
        action: AuditLogRepository.UPDATE,
        values: data,
      },
      options,
    );

    return {
      id: 'default',
      ...data,
    };
  }
};
