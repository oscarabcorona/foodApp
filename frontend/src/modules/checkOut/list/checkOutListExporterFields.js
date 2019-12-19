import model from 'modules/checkOut/checkOutModel';

const { fields } = model;

export default [
  fields.id,
  fields.table,
  fields.employee,
  fields.category,
  fields.name,
  fields.quantity,
  fields.observation,
  fields.status,
  fields.total,
  fields.createdAt,
  fields.updatedAt
];
