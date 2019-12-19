import { connectRouter } from 'connected-react-router';
import layout from 'modules/layout/layoutReducers';
import auth from 'modules/auth/authReducers';
import iam from 'modules/iam/iamReducers';
import auditLog from 'modules/auditLog/auditLogReducers';
import settings from 'modules/settings/settingsReducers';
import restaurant from 'modules/restaurant/restaurantReducers';
import category from 'modules/category/categoryReducers';
import product from 'modules/product/productReducers';
import order from 'modules/order/orderReducers';
import bar from 'modules/bar/barReducers';
import kitchen from 'modules/kitchen/kitchenReducers';
import delivery from 'modules/delivery/deliveryReducers';
import checkOut from 'modules/checkOut/checkOutReducers';
import sell from 'modules/sell/sellReducers';
import { combineReducers } from 'redux';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    auth,
    iam,
    auditLog,
    settings,
    restaurant,
    category,
    product,
    order,
    bar,
    kitchen,
    delivery,
    checkOut,
    sell,
  });
