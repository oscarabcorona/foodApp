import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/sell/importer/sellImporterSelectors';
import SellService from 'modules/sell/sellService';
import fields from 'modules/sell/importer/sellImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'SELL_IMPORTER',
  selectors,
  SellService.import,
  fields,
  i18n('entities.sell.importer.fileName'),
);
