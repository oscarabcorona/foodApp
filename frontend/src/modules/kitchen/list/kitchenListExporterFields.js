import model from 'modules/kitchen/kitchenModel';

const { fields } = model;

export default [
  fields.id,
  fields.category,
  fields.name,
  fields.employee,
  fields.quantity,
  fields.observation,
  fields.status,
  fields.createdAt,
  fields.updatedAt
];
