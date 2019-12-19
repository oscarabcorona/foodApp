import model from 'modules/product/productModel';

const { fields } = model;

export default [
  fields.id,
  fields.category,
  fields.name,
  fields.price,
  fields.photo,
  fields.stock,
  fields.status,
  fields.productionCost,
  fields.createdAt,
  fields.updatedAt
];
