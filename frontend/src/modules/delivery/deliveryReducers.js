import list from 'modules/delivery/list/deliveryListReducers';
import form from 'modules/delivery/form/deliveryFormReducers';
import view from 'modules/delivery/view/deliveryViewReducers';
import destroy from 'modules/delivery/destroy/deliveryDestroyReducers';
import importerReducer from 'modules/delivery/importer/deliveryImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
