import list from 'modules/bar/list/barListReducers';
import form from 'modules/bar/form/barFormReducers';
import view from 'modules/bar/view/barViewReducers';
import destroy from 'modules/bar/destroy/barDestroyReducers';
import importerReducer from 'modules/bar/importer/barImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
