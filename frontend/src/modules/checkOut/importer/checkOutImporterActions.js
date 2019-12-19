import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/checkOut/importer/checkOutImporterSelectors';
import CheckOutService from 'modules/checkOut/checkOutService';
import fields from 'modules/checkOut/importer/checkOutImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'CHECKOUT_IMPORTER',
  selectors,
  CheckOutService.import,
  fields,
  i18n('entities.checkOut.importer.fileName'),
);
