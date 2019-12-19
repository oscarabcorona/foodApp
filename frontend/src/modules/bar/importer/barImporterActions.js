import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/bar/importer/barImporterSelectors';
import BarService from 'modules/bar/barService';
import fields from 'modules/bar/importer/barImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'BAR_IMPORTER',
  selectors,
  BarService.import,
  fields,
  i18n('entities.bar.importer.fileName'),
);
