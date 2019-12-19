module.exports = (app) => {
  app.post(`/kitchen`, require('./kitchenCreate'));
  app.put(`/kitchen/:id`, require('./kitchenUpdate'));
  app.post(`/kitchen/import`, require('./kitchenImport'));
  app.delete(`/kitchen`, require('./kitchenDestroy'));
  app.get(
    `/kitchen/autocomplete`,
    require('./kitchenAutocomplete'),
  );
  app.get(`/kitchen`, require('./kitchenList'));
  app.get(`/kitchen/:id`, require('./kitchenFind'));
};
