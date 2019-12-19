module.exports = {
  env: 'development',

  /**
   * nodemailer (send mail to users) 
   */
  email: {
    from: 'Food App Team',
    host: null,
    auth: {
      user: null,
      pass: null,
    },
  },

  /**
   * Client URL used when sending emails.
   */
  clientUrl: 'https://food-app-576a8.firebaseapp.com',

  /**
   * When this email is set, all requests will automatically authenticate using this email.
   * Useful for testing purposes.
   */
  userAutoAuthenticatedEmailForTests:
    'foodApp@foodApp.com',


};
