import list from 'modules/checkOut/list/checkOutListReducers';
import form from 'modules/checkOut/form/checkOutFormReducers';
import view from 'modules/checkOut/view/checkOutViewReducers';
import destroy from 'modules/checkOut/destroy/checkOutDestroyReducers';
import importerReducer from 'modules/checkOut/importer/checkOutImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
