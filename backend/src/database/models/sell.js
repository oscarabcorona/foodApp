const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Sell extends AbstractEntityModel {
  constructor() {
    super('sell', 'sell', {
      category: new types.RelationToOne(),
      name: new types.RelationToOne(),
      price: new types.Number(null, null),
      quantity: new types.Number(null, null),
      observation: new types.String(null, null),
      table: new types.Number(null, null),
      employee: new types.RelationToOne(),
      stock: new types.Number(null, null),
      status: new types.Enumerator([
        "Inventory",
        "Order",
        "Bar",
        "Kitchen",
        "CheckOut",
        "Sell"
      ]),
      total: new types.Number(null, null),
      importHash: new types.String(null, 255),
    });
  }
};
