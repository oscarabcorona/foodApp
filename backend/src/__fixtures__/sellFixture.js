const genericFixture = require('./genericFixture');
const SellRepository = require('../database/repositories/sellRepository');

const sellFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new SellRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = sellFixture;
