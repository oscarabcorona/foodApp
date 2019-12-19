const Roles = require('../../security/roles');
const assert = require('assert');
const ValidationError = require('../../errors/validationError');
const UserRepository = require('../../database/repositories/userRepository');
const UserRoleRepository = require('../../database/repositories/userRoleRepository');
const AuthFirebaseService = require('../../auth/authFirebaseService');
const FirebaseRepository = require('../../database/repositories/firebaseRepository');

/**
 * Handles the edition of the user(s) via the IAM page.
 */
module.exports = class IamEditor {
  constructor(currentUser, language) {
    this.currentUser = currentUser;
    this.language = language;

    this.data = null;
    this.batch = null;
    this.user = null;
  }

  /**
   * Updates a User via the IAM page.
   *
   * @param {*} data
   */
  async update(data) {
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

  get _roles() {
    if (
      this.data.roles &&
      !Array.isArray(this.data.roles)
    ) {
      return [this.data.roles];
    } else {
      const uniqueRoles = [...new Set(this.data.roles)];
      return uniqueRoles;
    }
  }

  /**
   * Loads the user and validate that it exists.
   */
  async _loadUser() {
    this.user = await UserRepository.findById(this.data.id);

    if (!this.user) {
      throw new ValidationError(
        this.language,
        'iam.errors.userNotFound',
      );
    }
  }

  /**
   * Updates the user at the database.
   */
  async _updateAtDatabase() {
    this.user = await UserRepository.update(
      this.data.id,
      this.data,
      {
        currentUser: this.currentUser,
        batch: this.batch,
      },
    );
  }

  /**
   * Updates the user at the authentication provider.
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
   * Checks if the user is removing it's own owner role
   */
  async _isRemovingOwnManagerRole() {
    if (this._roles.includes(Roles.values.manager)) {
      return false;
    }

    if (this.data.id !== this.currentUser.id) {
      return false;
    }

    const currentUserRoles = await UserRoleRepository.findAllByUser(
      this.currentUser.id,
    );

    return currentUserRoles.includes(Roles.values.manager);
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

    assert(this.data.id, 'id is required');
    assert(this._roles, 'roles is required (can be empty)');

    if (await this._isRemovingOwnManagerRole()) {
      throw new ValidationError(
        this.language,
        'iam.errors.revokingOwnPermission',
      );
    }
  }
};
