const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Bar extends AbstractEntityModel {
  constructor() {
    super('bar', 'bar', {
      category: new types.RelationToMany(),
      name: new types.RelationToMany(),
      employee: new types.RelationToOne(),
      quantity: new types.Number(null, null),
      status: new types.Enumerator([
        "Inventory",
        "Order",
        "Bar",
        "Kitchen",
        "CheckOut",
        "Sell"
      ]),
      observation: new types.String(null, null),
      importHash: new types.String(null, 255),
    });
  }
};
