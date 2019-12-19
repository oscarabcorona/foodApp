module.exports = (app) => {
  app.post(`/check-out`, require('./checkOutCreate'));
  app.put(`/check-out/:id`, require('./checkOutUpdate'));
  app.post(`/check-out/import`, require('./checkOutImport'));
  app.delete(`/check-out`, require('./checkOutDestroy'));
  app.get(
    `/check-out/autocomplete`,
    require('./checkOutAutocomplete'),
  );
  app.get(`/check-out`, require('./checkOutList'));
  app.get(`/check-out/:id`, require('./checkOutFind'));
};
