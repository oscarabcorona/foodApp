const genericFixture = require('./genericFixture');
const BarRepository = require('../database/repositories/barRepository');

const barFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new BarRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = barFixture;
