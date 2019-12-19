const userFixture = require('./userFixture');
const restaurantFixture = require('./restaurantFixture');
const categoryFixture = require('./categoryFixture');
const productFixture = require('./productFixture');
const orderFixture = require('./orderFixture');
const barFixture = require('./barFixture');
const kitchenFixture = require('./kitchenFixture');
const deliveryFixture = require('./deliveryFixture');
const checkOutFixture = require('./checkOutFixture');
const sellFixture = require('./sellFixture');
const AbstractRepository = require('../database/repositories/abstractRepository');

module.exports = {
  user: userFixture,
  restaurant: restaurantFixture,
  category: categoryFixture,
  product: productFixture,
  order: orderFixture,
  bar: barFixture,
  kitchen: kitchenFixture,
  delivery: deliveryFixture,
  checkOut: checkOutFixture,
  sell: sellFixture,

  async cleanDatabase() {
    await AbstractRepository.cleanDatabase();
  },
};
