const assert = require('assert');
const UserRepository = require('../../database/repositories/userRepository');
const AuthFirebaseService = require('../../auth/authFirebaseService');
const FirebaseRepository = require('../../database/repositories/firebaseRepository');

/**
 * Handles the update of the user profile.
 */
module.exports = class AuthProfileEditor {
  constructor(currentUser, language) {
    this.currentUser = currentUser;
    this.language = language;

    this.batch = null;
  }

  /**
   * Executes the user update.
   *
   * @param {*} data
   */
  async execute(data) {
    this.data = data;

    await this._validate();

    try {
      this.batch = await FirebaseRepository.createBatch();

      await this._loadUser();
      await this._updateAtDatabase();

      await FirebaseRepository.commitBatch(this.batch);
    } catch (error) {
      throw error;
    }

    await this._updateAtAuthentication();
  }

  /**
   * Loads the user.
   */
  async _loadUser() {
    this.user = await UserRepository.findById(
      this.currentUser.id,
    );
  }

  /**
   * Updates the user at the database.
   */
  async _updateAtDatabase() {
    this.user = await UserRepository.updateProfile(
      this.currentUser.id,
      this.data,
      {
        currentUser: this.currentUser,
        batch: this.batch,
      },
    );
  }

  /**
   * Updates the user at the auth provider.
   */
  async _updateAtAuthentication() {
    if (this.user.authenticationUid) {
      await AuthFirebaseService.updateUser(
        this.user.authenticationUid,
        this.user,
      );
    }
  }

  /**
   * Validates the user info.
   */
  async _validate() {
    assert(this.currentUser, 'currentUser is required');
    assert(
      this.currentUser.id,
      'currentUser.id is required',
    );
    assert(
      this.currentUser.email,
      'currentUser.email is required',
    );

    assert(this.data, 'profile is required');
  }
};
