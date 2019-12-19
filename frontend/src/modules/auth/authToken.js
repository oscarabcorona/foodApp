import * as firebase from 'firebase/app';

export class AuthToken {
  static async get() {
    if (
      firebase.apps.length &&
      firebase.auth().currentUser
    ) {
      return await firebase
        .auth()
        .currentUser.getIdToken(true);
    }

    return null;
  }
}
