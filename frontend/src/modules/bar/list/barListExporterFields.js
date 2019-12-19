import model from 'modules/bar/barModel';

const { fields } = model;

export default [
  fields.id,
  fields.category,
  fields.name,
  fields.employee,
  fields.quantity,
  fields.status,
  fields.observation,
  fields.createdAt,
  fields.updatedAt
];
