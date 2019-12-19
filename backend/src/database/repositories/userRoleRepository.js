const FirebaseRepository = require('./firebaseRepository');
const lodash = require('lodash');
const admin = require('firebase-admin');

/**
 * Handles database operations for User Roles.
 */
module.exports = class UserRoleRepository {
  /**
   * Finds the roles based on the filter, and fills with the related users.
   */
  static async findAllWithUsers({ filter, orderBy }) {
    const users = FirebaseRepository.mapCollection(
      await admin
        .firestore()
        .collection(`user`)
        .get(),
    );

    const roles = [
      ...new Set(
        lodash.flatMap(users.map((user) => user.roles)),
      ),
    ];

    if (orderBy) {
      const [column, order] = orderBy.split('_');
      if (order === 'ASC') {
        roles.sort((a, b) => a.localeCompare(b));
      } else {
        roles.sort((a, b) => b.localeCompare(a));
      }
    }

    return roles.map((role) => ({
      role,
      users: users.filter((user) =>
        user.roles.includes(role),
      ),
    }));
  }

  /**
   * Find users by role.
   *
   * @param {*} role
   * @param {*} [options]
   */
  static async findAllUsersByRole(role, options) {
    const users = FirebaseRepository.mapCollection(
      await admin
        .firestore()
        .collection(`user`)
        .where('roles', 'array-contains', role)
        .get(),
    );

    return users;
  }

  /**
   * Finds the roles of the user.
   *
   * @param {*} userId
   * @param {*} [options]
   */
  static async findAllByUser(userId, options) {
    const user = await admin
      .firestore()
      .doc(`user/${userId}`)
      .get();

    return user.get('roles');
  }
};
