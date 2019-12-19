const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Drinks extends AbstractEntityModel {
  constructor() {
    super('drinks', 'drinks', {
      restaurant: new types.RelationToOne(),
      name: new types.String(null, 255),
      importHash: new types.String(null, 255),
    });
  }
};
