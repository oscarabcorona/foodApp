const genericFixture = require('./genericFixture');
const RestaurantRepository = require('../database/repositories/restaurantRepository');

const restaurantFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new RestaurantRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = restaurantFixture;
