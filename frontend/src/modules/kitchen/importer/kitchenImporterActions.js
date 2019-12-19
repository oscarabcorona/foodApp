import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/kitchen/importer/kitchenImporterSelectors';
import KitchenService from 'modules/kitchen/kitchenService';
import fields from 'modules/kitchen/importer/kitchenImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'KITCHEN_IMPORTER',
  selectors,
  KitchenService.import,
  fields,
  i18n('entities.kitchen.importer.fileName'),
);
