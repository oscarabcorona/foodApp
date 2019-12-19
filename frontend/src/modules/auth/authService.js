import * as firebase from 'firebase/app';
import authAxios from 'modules/shared/axios/authAxios';

export default class AuthService {
  static onAuthStateChanged(
    callbackSuccess,
    callbackError,
  ) {
    return firebase
      .auth()
      .onAuthStateChanged(callbackSuccess, callbackError);
  }

  static async sendEmailVerification(authenticationUser) {
    if (await this.isEmailConfigured()) {
      return this.sendEmailVerificationFromBackend();
    }

    return this.sendEmailVerificationFromClient(
      authenticationUser,
    );
  }

  static async sendEmailVerificationFromBackend() {
    const response = await authAxios.post(
      '/auth/send-email-address-verification-email',
    );

    return response.data;
  }

  static async sendEmailVerificationFromClient(
    authenticationUser,
  ) {
    return authenticationUser.sendEmailVerification();
  }

  static async sendPasswordResetEmail(email) {
    if (await this.isEmailConfigured()) {
      return this.sendPasswordResetEmailFromBackend(email);
    }

    return this.sendPasswordResetEmailFromClient(email);
  }

  static async sendPasswordResetEmailFromBackend(email) {
    const response = await authAxios.post(
      '/auth/send-password-reset-email',
      {
        email,
      },
    );

    return response.data;
  }

  static async sendPasswordResetEmailFromClient(email) {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  static async registerWithEmailAndPassword(
    email,
    password,
  ) {
    const credentials = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    this.sendEmailVerification(credentials.user);
    return credentials.user;
  }

  static async signinWithSocial(
    provider,
    rememberMe = false,
  ) {
    const persistence = rememberMe
      ? firebase.auth.Auth.Persistence.LOCAL
      : firebase.auth.Auth.Persistence.SESSION;

    await firebase.auth().setPersistence(persistence);

    const providers = {
      google: firebase.auth.GoogleAuthProvider,
      facebook: firebase.auth.FacebookAuthProvider,
      twitter: firebase.auth.TwitterAuthProvider,
    };

    return firebase
      .auth()
      .signInWithPopup(new providers[provider]());
  }

  static async signinWithEmailAndPassword(
    email,
    password,
    rememberMe = false,
  ) {
    const persistence = rememberMe
      ? firebase.auth.Auth.Persistence.LOCAL
      : firebase.auth.Auth.Persistence.SESSION;

    await firebase.auth().setPersistence(persistence);

    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
  }

  static async fetchMe() {
    const response = await authAxios.get('/auth/me');
    return response.data;
  }

  static async isEmailConfigured() {
    const response = await authAxios.get(
      '/auth/email-configured',
    );
    return response.data;
  }

  static async reauthenticateWithStorageToken() {
    try {
      const response = await authAxios.get(
        '/auth/storage-token',
      );

      const token = response.data;
      return firebase.auth().signInWithCustomToken(token);
    } catch (error) {
      console.error(error);
    }
  }

  static signout() {
    return firebase.auth().signOut();
  }

  static async updateProfile(
    firstName,
    lastName,
    phoneNumber,
    avatars,
  ) {
    const body = {
      profile: {
        firstName,
        lastName,
        phoneNumber,
        avatars,
      },
    };

    const response = await authAxios.put(
      '/auth/profile',
      body,
    );

    return response.data;
  }
}
