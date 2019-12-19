import list from 'modules/category/list/categoryListReducers';
import form from 'modules/category/form/categoryFormReducers';
import view from 'modules/category/view/categoryViewReducers';
import destroy from 'modules/category/destroy/categoryDestroyReducers';
import importerReducer from 'modules/category/importer/categoryImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
