const genericFixture = require('./genericFixture');
const KitchenRepository = require('../database/repositories/kitchenRepository');

const kitchenFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new KitchenRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = kitchenFixture;
