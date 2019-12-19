const AuthFirebaseService = require('./authFirebaseService');
const config = require('../../config')();
const AuthService = require('../services/auth/authService');

/**
 * Authenticates and fills the request with the user if it exists.
 * If no token is passed, it continues the request but without filling the currentUser.
 * If userAutoAuthenticatedEmailForTests exists and no token is passed, it fills with this user for tests.
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
async function authMiddleware(req, res, next) {
  req.language = req.headers['accept-language'] || 'en';

  if (
    (!req.headers.authorization ||
      !req.headers.authorization.startsWith('Bearer ')) &&
    !(req.cookies && req.cookies.__session)
  ) {
  }

  let idToken;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer ')
  ) {
    // Read the ID Token from the Authorization header.
    idToken = req.headers.authorization.split('Bearer ')[1];
  } else if (req.cookies) {
    // Read the ID Token from cookie.
    idToken = req.cookies.__session;
  } else {
    return next();
  }

  try {
    const { uid } = await AuthFirebaseService.verifyIdToken(
      idToken,
    );

    const currentUser = await AuthService.findOrCreateFromAuth(
      uid,
    );

    if (currentUser.disabled) {
      throw new Error(
        `User '${currentUser.email}' is disabled`,
      );
    }

    req.currentUser = currentUser;

    return next();
  } catch (error) {
    console.error(
      'Error while verifying Firebase ID token:',
      error,
    );

    res.status(403).send('Unauthorized');
  }
}

/**
 * Fills the request with the authenticateWithTestUser in case it exists.
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
async function authenticateWithTestUserIfExists(
  req,
  res,
  next,
) {
  const userAutoAuthenticatedEmailForTests =
    config.tokens &&
    config.tokens.userAutoAuthenticatedEmailForTests;

  if (!userAutoAuthenticatedEmailForTests) {
    return next();
  }

  try {
    const authUser = await AuthFirebaseService.getUserByEmail(
      userAutoAuthenticatedEmailForTests,
    );

    console.log(
      `Authenticated with default user: ${userAutoAuthenticatedEmailForTests}`,
    );

    const currentUser = await AuthService.findOrCreateFromAuth(
      authUser.uid,
    );

    if (currentUser.disabled) {
      throw new Error(
        `User '${currentUser.email}' is disabled`,
      );
    }

    req.currentUser = currentUser;

    return next();
  } catch (error) {
    console.error(
      `Error while authenticating with default user: ${userAutoAuthenticatedEmailForTests}:`,
      error,
    );

    res.status(403).send('Unauthorized');
    return;
  }
}

module.exports = authMiddleware;
