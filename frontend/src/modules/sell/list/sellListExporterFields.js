import model from 'modules/sell/sellModel';

const { fields } = model;

export default [
  fields.id,
  fields.category,
  fields.name,
  fields.price,
  fields.quantity,
  fields.observation,
  fields.table,
  fields.employee,
  fields.stock,
  fields.status,
  fields.total,
  fields.createdAt,
  fields.updatedAt
];
