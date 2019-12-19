const AuthFirebaseService = require('../../auth/authFirebaseService');
const UserRepository = require('../../database/repositories/userRepository');
const assert = require('assert');
const Roles = require('../../security/roles');

/**
 * Handles all the Auth operations of the user.
 */
class AuthService {
  /**
   * Finds the user if exists, otherwise creates the user using the auth provider info.
   * @param {*} uid
   */
  static async findOrCreateFromAuth(uid) {
    assert(uid, 'uuid is required');

    const authUser = await AuthFirebaseService.getUser(uid);
    assert(authUser, 'Authentication User not found');

    const { email } = authUser;
    const databaseUser = await UserRepository.findByEmailWithoutAvatar(
      email,
    );

    /**
     * If the user exists on the database, updates the authentication uid
     * to ensure that it's aligned with the one in the authentication provider
     */
    if (databaseUser) {
      if (databaseUser.disabled && !authUser.disabled) {
        await AuthFirebaseService.disable(authUser.uid);
      }

      if (databaseUser.authenticationUid === authUser.uid) {
        return databaseUser;
      }

      return UserRepository.updateAuthenticationUid(
        databaseUser.id,
        authUser.uid,
      );
    }

    const isFirstUser =
      (await UserRepository.count()) === 0;

    const createdDatabaseUser = await UserRepository.createFromAuth(
      {
        firstName:
          authUser.displayName ||
          authUser.email.split('@')[0],
        email: authUser.email,
        authenticationUid: authUser.uid,
        /**
         * If the user is the first user, it's auto set as the owner.
         * New users have no permissions. You can override this behaviour here.
         */
        roles: isFirstUser ? [Roles.values.manager] : [Roles.values.foodCustumer],
      },
    );

    return await UserRepository.findById(
      createdDatabaseUser.id,
    );
  }
}

module.exports = AuthService;
