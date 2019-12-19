module.exports = (app) => {
    app.post(`/category`, require('./categoryCreate'));
    app.put(`/category/:id`, require('./categoryUpdate'));
    app.post(`/category/import`, require('./categoryImport'));
    app.delete(`/category`, require('./categoryDestroy'));
    app.get(
      `/category/autocomplete`,
      require('./categoryAutocomplete'),
    );
    app.get(`/category`, require('./categoryList'));
    app.get(`/category/:id`, require('./categoryFind'));
  };
  