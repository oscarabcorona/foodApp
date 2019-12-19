const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Category extends AbstractEntityModel {
  constructor() {
    super('category', 'category', {
      restaurant: new types.RelationToOne(),
      name: new types.String(null, 255),
      importHash: new types.String(null, 255),
    });
  }
};
