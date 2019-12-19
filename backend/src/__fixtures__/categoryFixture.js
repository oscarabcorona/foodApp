const genericFixture = require('./genericFixture');
const CategoryRepository = require('../database/repositories/categoryRepository');

const categoryFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new CategoryRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = categoryFixture;
