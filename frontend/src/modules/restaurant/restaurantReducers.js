import list from 'modules/restaurant/list/restaurantListReducers';
import form from 'modules/restaurant/form/restaurantFormReducers';
import view from 'modules/restaurant/view/restaurantViewReducers';
import destroy from 'modules/restaurant/destroy/restaurantDestroyReducers';
import importerReducer from 'modules/restaurant/importer/restaurantImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
