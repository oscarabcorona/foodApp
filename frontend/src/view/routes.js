import Permissions from 'security/permissions';
import { i18n } from 'i18n';
import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import HistoryIcon from '@material-ui/icons/History';
import SettingsIcon from '@material-ui/icons/Settings'; 
import FastfoodIcon from '@material-ui/icons/Fastfood';
import StoreIcon from '@material-ui/icons/Store';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import OfflinePinIcon from '@material-ui/icons/OfflinePin';
import PaymentIcon from '@material-ui/icons/Payment';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const permissions = Permissions.values;

const privateRoutes = [
  {
    path: '/',
    icon: <HomeIcon />,
    label: i18n('home.menu'),
    menu: {
      exact: true,
    },
    loader: () => import('view/home/HomePage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/profile',
    loader: () => import('view/auth/ProfileFormPage'),
    permissionRequired: null,
    exact: true,
    menu: false,
  },

  {
    path: '/iam',
    loader: () => import('view/iam/list/IamPage'),
    permissionRequired: permissions.iamRead,
    exact: true,
    icon: <PersonAddIcon />,
    label: i18n('iam.menu'),
    menu: true,
  },
  {
    path: '/iam/new',
    loader: () => import('view/iam/new/IamNewPage'),
    menu: false,
    permissionRequired: permissions.iamCreate,
    exact: true,
  },
  {
    path: '/iam/importer',
    loader: () =>
      import('view/iam/importer/IamImporterPage'),
    menu: false,
    permissionRequired: permissions.iamImport,
    exact: true,
  },
  {
    path: '/iam/:id/edit',
    loader: () => import('view/iam/edit/IamEditPage'),
    menu: false,
    permissionRequired: permissions.iamEdit,
    exact: true,
  },
  {
    path: '/iam/:id',
    loader: () => import('view/iam/view/IamViewPage'),
    menu: false,
    permissionRequired: permissions.iamRead,
    exact: true,
  },

  {
    path: '/audit-logs',
    icon: <HistoryIcon />,
    label: i18n('auditLog.menu'),
    loader: () => import('view/auditLog/AuditLogPage'),
    menu: true,
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    icon: <SettingsIcon />,
    label: i18n('settings.menu'),
    loader: () => import('view/settings/SettingsFormPage'),
    permissionRequired: permissions.settingsEdit,
    menu: true,
  },

  {
    path: '/restaurant',
    loader: () => import('view/restaurant/list/RestaurantListPage'),
    permissionRequired: permissions.restaurantRead,
    exact: true,
    icon: <StoreIcon />,
    label: i18n('entities.restaurant.menu'),
    menu: true,
  },
  {
    path: '/restaurant/new',
    loader: () => import('view/restaurant/form/RestaurantFormPage'),
    menu: false,
    permissionRequired: permissions.restaurantCreate,
    exact: true,
  },
  {
    path: '/restaurant/importer',
    loader: () =>
      import('view/restaurant/importer/RestaurantImporterPage'),
    menu: false,
    permissionRequired: permissions.restaurantImport,
    exact: true,
  },
  {
    path: '/restaurant/:id/edit',
    loader: () => import('view/restaurant/form/RestaurantFormPage'),
    menu: false,
    permissionRequired: permissions.restaurantEdit,
    exact: true,
  },
  {
    path: '/restaurant/:id',
    loader: () => import('view/restaurant/view/RestaurantViewPage'),
    menu: false,
    permissionRequired: permissions.restaurantRead,
    exact: true,
  },

  {
    path: '/category',
    loader: () => import('view/category/list/CategoryListPage'),
    permissionRequired: permissions.categoryRead,
    exact: true,
    icon: <FastfoodIcon />,
    label: i18n('entities.category.menu'),
    menu: true,
  },
  {
    path: '/category/new',
    loader: () => import('view/category/form/CategoryFormPage'),
    menu: false,
    permissionRequired: permissions.categoryCreate,
    exact: true,
  },
  {
    path: '/category/newDrink',
    loader: () => import('view/category/form/CategoryFormPageDrinks'),
    menu: false,
    permissionRequired: permissions.categoryCreate,
    exact: true,
  },
  {
    path: '/category/importer',
    loader: () =>
      import('view/category/importer/CategoryImporterPage'),
    menu: false,
    permissionRequired: permissions.categoryImport,
    exact: true,
  },
  {
    path: '/category/:id/edit',
    loader: () => import('view/category/form/CategoryFormPage'),
    menu: false,
    permissionRequired: permissions.categoryEdit,
    exact: true,
  },
  {
    path: '/category/:id',
    loader: () => import('view/category/view/CategoryViewPage'),
    menu: false,
    permissionRequired: permissions.categoryRead,
    exact: true,
  },

  {
    path: '/product',
    loader: () => import('view/product/list/ProductListPage'),
    permissionRequired: permissions.productRead,
    exact: true,
    icon: <ShoppingBasketIcon />,
    label: i18n('entities.product.menu'),
    menu: true,
  },
  {
    path: '/product/new',
    loader: () => import('view/product/form/ProductFormPage'),
    menu: false,
    permissionRequired: permissions.productCreate,
    exact: true,
  },
  {
    path: '/product/importer',
    loader: () =>
      import('view/product/importer/ProductImporterPage'),
    menu: false,
    permissionRequired: permissions.productImport,
    exact: true,
  },
  {
    path: '/product/:id/edit',
    loader: () => import('view/product/form/ProductFormPage'),
    menu: false,
    permissionRequired: permissions.productEdit,
    exact: true,
  },
  {
    path: '/product/:id',
    loader: () => import('view/product/view/ProductViewPage'),
    menu: false,
    permissionRequired: permissions.productRead,
    exact: true,
  },

  {
    path: '/order',
    loader: () => import('view/order/list/OrderListPage'),
    permissionRequired: permissions.orderRead,
    exact: true,
    icon: <AddShoppingCartIcon />,
    label: i18n('entities.order.menu'),
    menu: true,
  },
  {
    path: '/order/new',
    loader: () => import('view/order/form/OrderFormPage'),
    menu: false,
    permissionRequired: permissions.orderCreate,
    exact: true,
  },
  {
    path: '/order/importer',
    loader: () =>
      import('view/order/importer/OrderImporterPage'),
    menu: false,
    permissionRequired: permissions.orderImport,
    exact: true,
  },
  {
    path: '/order/:id/edit',
    loader: () => import('view/order/form/OrderFormPage'),
    menu: false,
    permissionRequired: permissions.orderEdit,
    exact: true,
  },
  {
    path: '/order/:id',
    loader: () => import('view/order/view/OrderViewPage'),
    menu: false,
    permissionRequired: permissions.orderRead,
    exact: true,
  },

  {
    path: '/bar',
    loader: () => import('view/bar/list/BarListPage'),
    permissionRequired: permissions.barRead,
    exact: true,
    icon: <LocalBarIcon />,
    label: i18n('entities.bar.menu'),
    menu: true,
  },
  {
    path: '/bar/new',
    loader: () => import('view/bar/form/BarFormPage'),
    menu: false,
    permissionRequired: permissions.barCreate,
    exact: true,
  },
  {
    path: '/bar/importer',
    loader: () =>
      import('view/bar/importer/BarImporterPage'),
    menu: false,
    permissionRequired: permissions.barImport,
    exact: true,
  },
  {
    path: '/bar/:id/edit',
    loader: () => import('view/bar/form/BarFormPage'),
    menu: false,
    permissionRequired: permissions.barEdit,
    exact: true,
  },
  {
    path: '/bar/:id',
    loader: () => import('view/bar/view/BarViewPage'),
    menu: false,
    permissionRequired: permissions.barRead,
    exact: true,
  },

  {
    path: '/kitchen',
    loader: () => import('view/kitchen/list/KitchenListPage'),
    permissionRequired: permissions.kitchenRead,
    exact: true,
    icon: <LocalDiningIcon />,
    label: i18n('entities.kitchen.menu'),
    menu: true,
  },
  {
    path: '/kitchen/new',
    loader: () => import('view/kitchen/form/KitchenFormPage'),
    menu: false,
    permissionRequired: permissions.kitchenCreate,
    exact: true,
  },
  {
    path: '/kitchen/importer',
    loader: () =>
      import('view/kitchen/importer/KitchenImporterPage'),
    menu: false,
    permissionRequired: permissions.kitchenImport,
    exact: true,
  },
  {
    path: '/kitchen/:id/edit',
    loader: () => import('view/kitchen/form/KitchenFormPage'),
    menu: false,
    permissionRequired: permissions.kitchenEdit,
    exact: true,
  },
  {
    path: '/kitchen/:id',
    loader: () => import('view/kitchen/view/KitchenViewPage'),
    menu: false,
    permissionRequired: permissions.kitchenRead,
    exact: true,
  },

  {
    path: '/delivery',
    loader: () => import('view/delivery/list/DeliveryListPage'),
    permissionRequired: permissions.deliveryRead,
    exact: true,
    icon: <OfflinePinIcon />,
    label: i18n('entities.delivery.menu'),
    menu: true,
  },
  {
    path: '/delivery/new',
    loader: () => import('view/delivery/form/DeliveryFormPage'),
    menu: false,
    permissionRequired: permissions.deliveryCreate,
    exact: true,
  },
  {
    path: '/delivery/importer',
    loader: () =>
      import('view/delivery/importer/DeliveryImporterPage'),
    menu: false,
    permissionRequired: permissions.deliveryImport,
    exact: true,
  },
  {
    path: '/delivery/:id/edit',
    loader: () => import('view/delivery/form/DeliveryFormPage'),
    menu: false,
    permissionRequired: permissions.deliveryEdit,
    exact: true,
  },
  {
    path: '/delivery/:id',
    loader: () => import('view/delivery/view/DeliveryViewPage'),
    menu: false,
    permissionRequired: permissions.deliveryRead,
    exact: true,
  },

  {
    path: '/check-out',
    loader: () => import('view/checkOut/list/CheckOutListPage'),
    permissionRequired: permissions.checkOutRead,
    exact: true,
    icon: <PaymentIcon />,
    label: i18n('entities.checkOut.menu'),
    menu: true,
  },
  {
    path: '/check-out/new',
    loader: () => import('view/checkOut/form/CheckOutFormPage'),
    menu: false,
    permissionRequired: permissions.checkOutCreate,
    exact: true,
  },
  {
    path: '/check-out/importer',
    loader: () =>
      import('view/checkOut/importer/CheckOutImporterPage'),
    menu: false,
    permissionRequired: permissions.checkOutImport,
    exact: true,
  },
  {
    path: '/check-out/:id/edit',
    loader: () => import('view/checkOut/form/CheckOutFormPage'),
    menu: false,
    permissionRequired: permissions.checkOutEdit,
    exact: true,
  },
  {
    path: '/check-out/:id',
    loader: () => import('view/checkOut/view/CheckOutViewPage'),
    menu: false,
    permissionRequired: permissions.checkOutRead,
    exact: true,
  },

  {
    path: '/sell',
    loader: () => import('view/sell/list/SellListPage'),
    permissionRequired: permissions.sellRead,
    exact: true,
    icon: <AttachMoneyIcon />,
    label: i18n('entities.sell.menu'),
    menu: true,
  },
  {
    path: '/sell/new',
    loader: () => import('view/sell/form/SellFormPage'),
    menu: false,
    permissionRequired: permissions.sellCreate,
    exact: true,
  },
  {
    path: '/sell/importer',
    loader: () =>
      import('view/sell/importer/SellImporterPage'),
    menu: false,
    permissionRequired: permissions.sellImport,
    exact: true,
  },
  {
    path: '/sell/:id/edit',
    loader: () => import('view/sell/form/SellFormPage'),
    menu: false,
    permissionRequired: permissions.sellEdit,
    exact: true,
  },
  {
    path: '/sell/:id',
    loader: () => import('view/sell/view/SellViewPage'),
    menu: false,
    permissionRequired: permissions.sellRead,
    exact: true,
  },
];

const publicRoutes = [
  {
    path: '/auth/signin',
    loader: () => import('view/auth/SigninPage'),
  },
  {
    path: '/auth/signup',
    loader: () => import('view/auth/SignupPage'),
  },
  {
    path: '/auth/forgot-password',
    loader: () => import('view/auth/ForgotPasswordPage'),
  },
];

const emptyPermissionsRoutes = [
  {
    path: '/auth/empty-permissions',
    loader: () => import('view/auth/EmptyPermissionsPage'),
  },
];

const emailUnverifiedRoutes = [
  {
    path: '/auth/email-unverified',
    loader: () => import('view/auth/EmailUnverifiedPage'),
  },
];

const simpleRoutes = [
  {
    path: '/403',
    loader: () => import('view/shared/errors/Error403Page'),
  },
  {
    path: '/500',
    loader: () => import('view/shared/errors/Error500Page'),
  },
  {
    path: '**',
    loader: () => import('view/shared/errors/Error404Page'),
  },
];

export default {
  privateRoutes,
  publicRoutes,
  emptyPermissionsRoutes,
  emailUnverifiedRoutes,
  simpleRoutes,
};
