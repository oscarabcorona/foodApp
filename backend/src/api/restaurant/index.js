module.exports = (app) => {
  app.post(`/restaurant`, require('./restaurantCreate'));
  app.put(`/restaurant/:id`, require('./restaurantUpdate'));
  app.post(`/restaurant/import`, require('./restaurantImport'));
  app.delete(`/restaurant`, require('./restaurantDestroy'));
  app.get(
    `/restaurant/autocomplete`,
    require('./restaurantAutocomplete'),
  );
  app.get(`/restaurant`, require('./restaurantList'));
  app.get(`/restaurant/:id`, require('./restaurantFind'));
};
