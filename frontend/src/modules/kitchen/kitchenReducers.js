import list from 'modules/kitchen/list/kitchenListReducers';
import form from 'modules/kitchen/form/kitchenFormReducers';
import view from 'modules/kitchen/view/kitchenViewReducers';
import destroy from 'modules/kitchen/destroy/kitchenDestroyReducers';
import importerReducer from 'modules/kitchen/importer/kitchenImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
