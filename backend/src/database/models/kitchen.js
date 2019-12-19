const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Kitchen extends AbstractEntityModel {
  constructor() {
    super('kitchen', 'kitchen', {
      category: new types.RelationToMany(),
      name: new types.RelationToMany(),
      employee: new types.RelationToOne(),
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
      importHash: new types.String(null, 255),
    });
  }
};
