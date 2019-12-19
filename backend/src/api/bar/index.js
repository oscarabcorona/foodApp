module.exports = (app) => {
  app.post(`/bar`, require('./barCreate'));
  app.put(`/bar/:id`, require('./barUpdate'));
  app.post(`/bar/import`, require('./barImport'));
  app.delete(`/bar`, require('./barDestroy'));
  app.get(
    `/bar/autocomplete`,
    require('./barAutocomplete'),
  );
  app.get(`/bar`, require('./barList'));
  app.get(`/bar/:id`, require('./barFind'));
};
