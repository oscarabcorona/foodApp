import model from 'modules/order/orderModel';

const { fields } = model;

export default [
  fields.category,
  fields.name,
  fields.quantity,
  fields.observation,
  fields.table,
  fields.employee,
  fields.status,
];
