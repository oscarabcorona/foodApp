import list from 'modules/sell/list/sellListReducers';
import form from 'modules/sell/form/sellFormReducers';
import view from 'modules/sell/view/sellViewReducers';
import destroy from 'modules/sell/destroy/sellDestroyReducers';
import importerReducer from 'modules/sell/importer/sellImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
