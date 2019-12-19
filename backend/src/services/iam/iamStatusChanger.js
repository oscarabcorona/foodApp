const UserRepository = require('../../database/repositories/userRepository');
const AuthFirebaseService = require('../../auth/authFirebaseService');
const assert = require('assert');
const ValidationError = require('../../errors/validationError');
const FirebaseRepository = require('../../database/repositories/firebaseRepository');

/**
 * Handles changing the status (enabled/disabeld) of the Users.
 */
module.exports = class IamStatusChanger {
  constructor(currentUser, language) {
    this.currentUser = currentUser;
    this.language = language;
    this.batch = null;
  }

  async changeStatus(data) {
    this.data = data;

    await this._validate();

    try {
      this.batch = await FirebaseRepository.createBatch();

      await this._loadUsers();
      await this._changeAtDatabase();
      await FirebaseRepository.commitBatch(this.batch);
    } catch (error) {
      throw error;
    }

    await this._changeAtAuthentication();
  }

  get _ids() {
    if (this.data.ids && !Array.isArray(this.data.ids)) {
      return [this.data.ids];
    } else {
      const uniqueIds = [...new Set(this.data.ids)];
      return uniqueIds;
    }
  }

  get _disabled() {
    return !!this.data.disabled;
  }

  async _loadUsers() {
    this.users = await UserRepository.findAllByDisabled(
      this._ids,
      !this._disabled,
    );
  }

  async _changeAtDatabase() {
    for (const user of this.users) {
      await UserRepository.updateStatus(
        user.id,
        this._disabled,
        {
          batch: this.batch,
          currentUser: this.currentUser,
        },
      );
    }
  }

  async _changeAtAuthentication() {
    for (const user of this.users) {
      if (user.authenticationUid) {
        if (user.disabled) {
          await AuthFirebaseService.enable(
            user.authenticationUid,
          );
        } else {
          await AuthFirebaseService.disable(
            user.authenticationUid,
          );
        }
      }
    }
  }

  async _isDisablingHimself() {
    return (
      this._disabled &&
      this._ids.includes(this.currentUser.id)
    );
  }

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

    assert(
      this._ids && this._ids.length,
      'ids is required',
    );

    if (await this._isDisablingHimself()) {
      throw new ValidationError(
        this.language,
        'iam.errors.disablingHimself',
      );
    }
  }
};
