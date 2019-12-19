const SettingsRepository = require('../database/repositories/settingsRepository');
const FirebaseRepository = require('../database/repositories/firebaseRepository');

const DEFAULT_SETTINGS = {
  id: 'default',
  theme: 'default',
};

/**
 * Handles Settings operations
 */
class SettingsService {
  /**
   * Finds the Settings or creates and returns the default.
   *
   * @param {*} currentUser
   */
  static async findOrCreateDefault(currentUser) {
    return SettingsRepository.findOrCreateDefault(
      DEFAULT_SETTINGS,
      { currentUser },
    );
  }

  /**
   * Saves the Settings.
   *
   * @param {*} data
   * @param {*} currentUser
   */
  static async save(data, currentUser) {
    const batch = await FirebaseRepository.createBatch();

    const settings = await SettingsRepository.save(data, {
      currentUser,
      batch,
    });

    await FirebaseRepository.commitBatch(batch);

    return settings;
  }
}

module.exports = SettingsService;
