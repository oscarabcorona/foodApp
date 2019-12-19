const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Product extends AbstractEntityModel {
  constructor() {
    super('product', 'product', {
      category: new types.RelationToOne(),
      name: new types.String(null, 255),
      price: new types.Number(null, null),
      photo: new types.Files(),
      stock: new types.Number(null, null),
      status: new types.Enumerator([
        "Inventory",
        "Order",
        "Bar",
        "Kitchen",
        "CheckOut",
        "Sell"
      ]),
      productionCost: new types.Number(null, null),
      importHash: new types.String(null, 255),
    });
  }
};
