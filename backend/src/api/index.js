const express = require('express');
const cors = require('cors');
const app = express();
const authFirebaseService = require('../auth/authFirebaseService');
const authMiddleware = require('../auth/authMiddleware');
const {
  init: databaseInit,
  middleware: databaseMiddleware,
} = require('../database/databaseInit');
const bodyParser = require('body-parser');
const helmet = require('helmet');

// Enables CORS
app.use(cors({ origin: true }));

// Initializes and adds the database middleware.
databaseInit().catch((error) => console.error(error));
app.use(databaseMiddleware);

// Initializes the authentication
authFirebaseService.init();

// Configures the authentication middleware
// to set the currentUser to the requests
app.use(authMiddleware);

// Enables Helmet, a set of tools to
// increase security.
app.use(helmet());

// Parses the body of POST/PUT request
// to JSON
app.use(bodyParser.json());

// Configure the Entity routes
const routes = express.Router();
require('./auditLog')(routes);
require('./auth')(routes);
require('./iam')(routes);
require('./settings')(routes);
require('./restaurant')(routes);
require('./category')(routes);
require('./product')(routes);
require('./order')(routes);
require('./bar')(routes);
require('./kitchen')(routes);
require('./delivery')(routes);
require('./checkOut')(routes);
require('./sell')(routes);

// Add the routes to the /api endpoint
app.use('/api', routes);

module.exports = app;
