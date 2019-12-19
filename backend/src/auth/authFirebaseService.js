const admin = require('../external/firebase-admin')();
const config = require('../../config')();
const _get = require('lodash/get');
const EmailAddressVerificationEmail = require('../emails/emailAddressVerificationEmail');
const PasswordResetEmail = require('../emails/passwordResetEmail');
const EmailSender = require('../services/shared/email/emailSender');
const ValidationError = require('../errors/validationError');

/**
 * Methods related to the Firebase Authentication.
 */
module.exports = class AuthFirebaseService {
  /**
   * (Test Only) Resets the firebase-admin module.
   */
  static _resetForTests() {
    admin._reset();
  }

  /**
   * (Test Only) Updates the email of the user
   */
  static async _updateEmailForTests(uid, email) {
    await admin.auth().updateUser(uid, {
      email,
    });
  }

  /**
   * Initializes the Firebase Authentication
   */
  static async init() {
    let serviceAccount = null;

    try {
      serviceAccount = require(`../../service-accounts/${config.env}.json`);
    } catch (error) {
      if (config.env === 'test') {
        return;
      }

      throw error;
    }

    await admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`,
    });
  }

  /**
   * Verifies the ID token passed on the header.
   *
   * @param {*} idToken
   */
  static async verifyIdToken(idToken) {
    return admin.auth().verifyIdToken(idToken);
  }

  /**
   * Creates a custom token for the user, using the metadata.
   * Util to add storage permissions, for example.
   *
   * @param {*} uid
   * @param {*} metadata
   */
  static async createCustomToken(uid, metadata) {
    return admin.auth().createCustomToken(uid, metadata);
  }

  /**
   * Finds the user on the auth provider by email.
   *
   * @param {*} email
   */
  static async getUserByEmail(email) {
    return admin.auth().getUserByEmail(email);
  }

  /**
   * Finds the user on the auth provider by uid.
   * @param {*} uid
   */
  static async getUser(uid) {
    return admin.auth().getUser(uid);
  }

  /**
   * Updates the user on the auth provider.
   *
   * @param {*} uid
   * @param {*} data
   */
  static async updateUser(uid, data) {
    await admin.auth().updateUser(uid, {
      displayName: data.fullName,
      photoURL:
        data.avatars && data.avatars.length
          ? data.avatars[0].publicUrl
          : null,
    });
  }

  /**
   * Disables the user on the auth provider.
   *
   * @param {*} uid
   */
  static async disable(uid) {
    await admin.auth().updateUser(uid, {
      disabled: true,
    });
  }

  /**
   * Enables the user on the auth provider.
   *
   * @param {*} uid
   */
  static async enable(uid) {
    await admin.auth().updateUser(uid, {
      disabled: false,
    });
  }

  /**
   * Sends email address verification email.
   */
  static async sendEmailAddressVerificationEmail(
    language,
    email,
  ) {
    if (!EmailSender.isConfigured) {
      throw new Error(
        `Email provider is not configured. Please configure it at backend/config/<environment>/email.json.`,
      );
    }

    let link;
    try {
      link = await admin
        .auth()
        .generateEmailVerificationLink(
          email,
          this._actionCodeSettings,
        );
    } catch (error) {
      throw new ValidationError(
        language,
        'auth.emailAddressVerificationEmail.error',
      );
    }

    const emailAddressVerificationEmail = new EmailAddressVerificationEmail(
      language,
      email,
      link,
    );

    return new EmailSender(
      emailAddressVerificationEmail,
    ).send();
  }

  /**
   * Sends password reset email.
   */
  static async sendPasswordResetEmail(language, email) {
    if (!EmailSender.isConfigured) {
      throw new Error(
        `Email provider is not configured. Please configure it at backend/config/<environment>/email.json.`,
      );
    }

    let link;

    try {
      link = await admin
        .auth()
        .generatePasswordResetLink(
          email,
          this._actionCodeSettings,
        );
    } catch (error) {
      throw new ValidationError(
        language,
        'auth.passwordReset.error',
      );
    }

    const passwordResetEmail = new PasswordResetEmail(
      language,
      email,
      link,
    );

    return new EmailSender(passwordResetEmail).send();
  }

  /**
   * Returns the settings for the email sender.
   */
  static get _actionCodeSettings() {
    const url = _get(config, 'clientUrl', undefined);

    if (!url) {
      return undefined;
    }

    return {
      url,
    };
  }
};
