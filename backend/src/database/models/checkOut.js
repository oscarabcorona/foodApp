const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class CheckOut extends AbstractEntityModel {
  constructor() {
    super('checkOut', 'checkOut', {
      table: new types.Number(null, null),
      employee: new types.RelationToOne(),
      category: new types.RelationToMany(),
      name: new types.RelationToMany(),
      quantity: new types.Number(null, null),
      observation: new types.String(null, null),
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
