import model from 'modules/category/categoryModel';

const { fields } = model;

export default [
  fields.id,
  fields.restaurant,
  fields.name,
  fields.createdAt,
  fields.updatedAt
];
