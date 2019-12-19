module.exports = (app) => {
  app.post(`/delivery`, require('./deliveryCreate'));
  app.put(`/delivery/:id`, require('./deliveryUpdate'));
  app.post(`/delivery/import`, require('./deliveryImport'));
  app.delete(`/delivery`, require('./deliveryDestroy'));
  app.get(
    `/delivery/autocomplete`,
    require('./deliveryAutocomplete'),
  );
  app.get(`/delivery`, require('./deliveryList'));
  app.get(`/delivery/:id`, require('./deliveryFind'));
};
