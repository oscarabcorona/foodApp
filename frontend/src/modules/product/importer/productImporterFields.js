import model from 'modules/product/productModel';

const { fields } = model;

export default [
  fields.category,
  fields.name,
  fields.price,
  fields.photo,
  fields.stock,
  fields.status,
  fields.productionCost,
];
