const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Order extends AbstractEntityModel {
  constructor() {
    super('order', 'order', {
      category: new types.RelationToOne(),
      name: new types.RelationToMany(),
      quantity: new types.Number(null, null),
      observation: new types.String(null, 500),
      table: new types.Number(null, null),
      employee: new types.RelationToOne(),
      status: new types.Enumerator([
        "Inventory",
        "Order",
        "Bar",
        "Kitchen",
        "CheckOut",
        "Sell"
      ]),
      importHash: new types.String(null, 255),
    });
  }
};
