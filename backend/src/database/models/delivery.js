const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Delivery extends AbstractEntityModel {
  constructor() {
    super('delivery', 'delivery', {
      table: new types.Number(null, null),
      employee: new types.RelationToOne(),
      order: new types.RelationToMany(),
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
