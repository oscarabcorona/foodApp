const genericFixture = require('./genericFixture');
const CheckOutRepository = require('../database/repositories/checkOutRepository');

const checkOutFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new CheckOutRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = checkOutFixture;
