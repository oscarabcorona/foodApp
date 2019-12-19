module.exports = (app) => {
  app.post(`/sell`, require('./sellCreate'));
  app.put(`/sell/:id`, require('./sellUpdate'));
  app.post(`/sell/import`, require('./sellImport'));
  app.delete(`/sell`, require('./sellDestroy'));
  app.get(
    `/sell/autocomplete`,
    require('./sellAutocomplete'),
  );
  app.get(`/sell`, require('./sellList'));
  app.get(`/sell/:id`, require('./sellFind'));
};
