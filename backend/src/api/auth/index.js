module.exports = (app) => {
  app.post(
    `/auth/send-email-address-verification-email`,
    require('./authSendEmailAddressVerificationEmail'),
  );

  app.post(
    `/auth/send-password-reset-email`,
    require('./authSendPasswordResetEmail'),
  );

  app.get(`/auth/storage-token`, require('./authStorageToken'));

  app.put(`/auth/profile`, require('./authUpdateProfile'));

  app.get(`/auth/me`, require('./authMe'));

  app.get(
    `/auth/email-configured`,
    require('./authIsEmailConfigured'),
  );
};
