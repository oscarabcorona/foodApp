import model from 'modules/restaurant/restaurantModel';

const { fields } = model;

export default [
  fields.id,
  fields.name,
  fields.employee,
  fields.products,
  fields.country,
  fields.city,
  fields.phoneNumber,
  fields.createdAt,
  fields.updatedAt
];
