import model from 'modules/delivery/deliveryModel';

const { fields } = model;

export default [
  fields.id,
  fields.table,
  fields.employee,
  fields.order,
  fields.status,
  fields.createdAt,
  fields.updatedAt
];
