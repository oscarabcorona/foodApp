const genericFixture = require('./genericFixture');
const DeliveryRepository = require('../database/repositories/deliveryRepository');

const deliveryFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new DeliveryRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = deliveryFixture;
