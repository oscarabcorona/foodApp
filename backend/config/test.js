module.exports = {
  env: 'test',

  /**
   * Configuration to allow email sending used on:
   * backend/src/services/shared/email/emailSender.js
   *
   * More info: https://nodemailer.com
   */
  email: {
    auth: {
      user: 'mock',
    },
  },

  /**
   * Client URL used when sending emails.
   */
  clientUrl: null,

  /**
   * When this email is set, all requests will automatically authenticate using this email.
   * Leave null for test environment.
   */
  userAutoAuthenticatedEmailForTests: null,


};
