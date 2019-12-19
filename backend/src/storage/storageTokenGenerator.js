const PermissionChecker = require('../services/iam/permissionChecker');
const AuthFirebaseService = require('../auth/authFirebaseService');

/**
 * Generates the File Storage token based on the user permissions.
 */
module.exports = class StorageTokenGenerator {
  constructor({ language, currentUser }) {
    this.currentUser = currentUser;
    this.permissionChecker = new PermissionChecker({
      language,
      currentUser,
    });
  }

  generateStorageToken() {
    const metadata = {};

    this.permissionChecker
      .allowedStorageFolders()
      .forEach((allowedStorageFolder) => {
        metadata[allowedStorageFolder] = true;
      });

    return AuthFirebaseService.createCustomToken(
      this.currentUser.authenticationUid,
      metadata,
    );
  }
};
