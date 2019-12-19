import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/delivery/importer/deliveryImporterSelectors';
import DeliveryService from 'modules/delivery/deliveryService';
import fields from 'modules/delivery/importer/deliveryImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'DELIVERY_IMPORTER',
  selectors,
  DeliveryService.import,
  fields,
  i18n('entities.delivery.importer.fileName'),
);
