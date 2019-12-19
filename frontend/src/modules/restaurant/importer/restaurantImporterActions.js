import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/restaurant/importer/restaurantImporterSelectors';
import RestaurantService from 'modules/restaurant/restaurantService';
import fields from 'modules/restaurant/importer/restaurantImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'RESTAURANT_IMPORTER',
  selectors,
  RestaurantService.import,
  fields,
  i18n('entities.restaurant.importer.fileName'),
);
