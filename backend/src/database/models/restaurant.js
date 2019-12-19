const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Restaurant extends AbstractEntityModel {
  constructor() {
    super('restaurant', 'restaurant', {
      name: new types.String(null, 255),
      employee: new types.RelationToMany(),
      products: new types.RelationToMany(),
      country: new types.String(null, 255),
      city: new types.String(null, 300),
      phoneNumber: new types.Number(null, 8),
      importHash: new types.String(null, 255),
    });
  }
};
