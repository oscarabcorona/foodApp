const Roles = require('./roles');
const roles = Roles.values;

/**
 * List of Permissions and the Roles allowed of using them.
 */
class Permissions {
  static get values() {
    return {
      iamEdit: {
        id: 'iamEdit',
        allowedRoles: [
          roles.manager, 
        ],
        allowedStorageFolders: ['user'],
      },
      iamCreate: {
        id: 'iamCreate',
        allowedRoles: [
          roles.manager, 
        ],
      },
      iamImport: {
        id: 'iamImport',
        allowedRoles: [
          roles.manager, 
        ],
      },
      iamRead: {
        id: 'iamRead',
        allowedRoles: [
          roles.manager, 
        ],
      },
      iamUserAutocomplete: {
        id: 'iamUserAutocomplete',
        allowedRoles: [
          roles.manager, 
        ],
      },
      auditLogRead: {
        id: 'auditLogRead',
        allowedRoles: [roles.manager],
      },
      settingsEdit: {
        id: 'settingsEdit',
        allowedRoles: [roles.manager],
      },
      restaurantImport: {
        id: 'restaurantImport',
        allowedRoles: [
          roles.manager, 
        ],
      },
      restaurantCreate: {
        id: 'restaurantCreate',
        allowedRoles: [
          roles.manager
        ],
        allowedStorageFolders: ['restaurant'],
      },
      restaurantEdit: {
        id: 'restaurantEdit',
        allowedRoles: [
          roles.manager, 
        ],
        allowedStorageFolders: ['restaurant'],
      },
      restaurantDestroy: {
        id: 'restaurantDestroy',
        allowedRoles: [
          roles.manager  
        ],
        allowedStorageFolders: ['restaurant'],
      },
      restaurantRead: {
        id: 'restaurantRead',
        allowedRoles: [
          roles.manager  
        ],
      },
      restaurantAutocomplete: {
        id: 'restaurantAutocomplete',
        allowedRoles: [
          roles.manager  
        ],
      },

      categoryImport: {
        id: 'categoryImport',
        allowedRoles: [
          roles.manager  
        ],
      },
      categoryCreate: {
        id: 'categoryCreate',
        allowedRoles: [
          roles.manager  
        ],
        allowedStorageFolders: ['category'],
      },
      categoryEdit: {
        id: 'categoryEdit',
        allowedRoles: [
          roles.manager  
        ],
        allowedStorageFolders: ['category'],
      },
      categoryDestroy: {
        id: 'categoryDestroy',
        allowedRoles: [
          roles.manager  
        ],
        allowedStorageFolders: ['category'],
      },
      categoryRead: {
        id: 'categoryRead',
        allowedRoles: [
          roles.manager, 
        ],
      },
      categoryAutocomplete: {
        id: 'categoryAutocomplete',
        allowedRoles: [
          roles.manager, 
        ],
      },

      productImport: {
        id: 'productImport',
        allowedRoles: [
          roles.manager  
        ],
      },
      productCreate: {
        id: 'productCreate',
        allowedRoles: [
          roles.manager  
        ],
        allowedStorageFolders: ['product'],
      },
      productEdit: {
        id: 'productEdit',
        allowedRoles: [
          roles.manager  
        ],
        allowedStorageFolders: ['product'],
      },
      productDestroy: {
        id: 'productDestroy',
        allowedRoles: [
          roles.manager 
        ],
        allowedStorageFolders: ['product'],
      },
      productRead: {
        id: 'productRead',
        allowedRoles: [
          roles.manager,
          roles.employeeWaiter,  
          roles.foodCustumer
        ],
      },
      productAutocomplete: {
        id: 'productAutocomplete',
        allowedRoles: [
          roles.manager,
          roles.employeeWaiter,  
          roles.foodCustumer
        ],
      },

      orderImport: {
        id: 'orderImport',
        allowedRoles: [
          roles.manager 
        ],
      },
      orderCreate: {
        id: 'orderCreate',
        allowedRoles: [
          roles.manager,
          roles.employeeWaiter,  
          roles.foodCustumer
        ],
        allowedStorageFolders: ['order'],
      },
      orderEdit: {
        id: 'orderEdit',
        allowedRoles: [
          roles.manager,
          roles.employeeWaiter,  
        ],
        allowedStorageFolders: ['order'],
      },
      orderDestroy: {
        id: 'orderDestroy',
        allowedRoles: [
          roles.manager,
          roles.employeeWaiter,  
        ],
        allowedStorageFolders: ['order'],
      },
      orderRead: {
        id: 'orderRead',
        allowedRoles: [
          roles.manager,
          roles.employeeWaiter,  
          roles.foodCustumer
        ],
      },
      orderAutocomplete: {
        id: 'orderAutocomplete',
        allowedRoles: [
          roles.manager,
          roles.employeeWaiter,  
          roles.foodCustumer 
        ],
      },

      barImport: {
        id: 'barImport',
        allowedRoles: [
          roles.manager, 
          roles.employeeChef,  
        ],
      },
      barCreate: {
        id: 'barCreate',
        allowedRoles: [
          roles.manager, 
          roles.employeeChef,  
        ],
        allowedStorageFolders: ['bar'],
      },
      barEdit: {
        id: 'barEdit',
        allowedRoles: [
          roles.manager, 
          roles.employeeChef,  
        ],
        allowedStorageFolders: ['bar'],
      },
      barDestroy: {
        id: 'barDestroy',
        allowedRoles: [
          roles.manager, 
        ],
        allowedStorageFolders: ['bar'],
      },
      barRead: {
        id: 'barRead',
        allowedRoles: [
          roles.manager, 
          roles.employeeChef,  
        ],
      },
      barAutocomplete: {
        id: 'barAutocomplete',
        allowedRoles: [
          roles.manager, 
          roles.employeeChef,  
        ],
      },

      kitchenImport: {
        id: 'kitchenImport',
        allowedRoles: [
          roles.manager, 
          roles.employeeChef, 
        ],
      },
      kitchenCreate: {
        id: 'kitchenCreate',
        allowedRoles: [
          roles.manager, 
          roles.employeeChef, 
        ],
        allowedStorageFolders: ['kitchen'],
      },
      kitchenEdit: {
        id: 'kitchenEdit',
        allowedRoles: [
          roles.manager, 
          roles.employeeChef, 
        ],
        allowedStorageFolders: ['kitchen'],
      },
      kitchenDestroy: {
        id: 'kitchenDestroy',
        allowedRoles: [
          roles.manager, 
        ],
        allowedStorageFolders: ['kitchen'],
      },
      kitchenRead: {
        id: 'kitchenRead',
        allowedRoles: [
          roles.manager,  
          roles.employeeChef, 
        ],
      },
      kitchenAutocomplete: {
        id: 'kitchenAutocomplete',
        allowedRoles: [
          roles.manager,  
          roles.employeeChef,  
        ],
      },

      deliveryImport: {
        id: 'deliveryImport',
        allowedRoles: [
          roles.manager, 
        ],
      },
      deliveryCreate: {
        id: 'deliveryCreate',
        allowedRoles: [
          roles.manager,
          roles.employeeWaiter,  
        ],
        allowedStorageFolders: ['delivery'],
      },
      deliveryEdit: {
        id: 'deliveryEdit',
        allowedRoles: [
          roles.manager,
          roles.employeeWaiter,  
        ],
        allowedStorageFolders: ['delivery'],
      },
      deliveryDestroy: {
        id: 'deliveryDestroy',
        allowedRoles: [
          roles.manager, 
        ],
        allowedStorageFolders: ['delivery'],
      },
      deliveryRead: {
        id: 'deliveryRead',
        allowedRoles: [
          roles.manager,
          roles.employeeWaiter,  
        ],
      },
      deliveryAutocomplete: {
        id: 'deliveryAutocomplete',
        allowedRoles: [
          roles.manager, 
          roles.employeeWaiter,  
        ],
      },

      checkOutImport: {
        id: 'checkOutImport',
        allowedRoles: [
          roles.manager, 
        ],
      },
      checkOutCreate: {
        id: 'checkOutCreate',
        allowedRoles: [
          roles.manager,
          roles.employeeChash,  
        ],
        allowedStorageFolders: ['checkOut'],
      },
      checkOutEdit: {
        id: 'checkOutEdit',
        allowedRoles: [
          roles.manager,
          roles.employeeChash,  
        ],
        allowedStorageFolders: ['checkOut'],
      },
      checkOutDestroy: {
        id: 'checkOutDestroy',
        allowedRoles: [
          roles.manager,
          roles.employeeChash, 
        ],
        allowedStorageFolders: ['checkOut'],
      },
      checkOutRead: {
        id: 'checkOutRead',
        allowedRoles: [
          roles.manager,
          roles.employeeChash, 
        ],
      },
      checkOutAutocomplete: {
        id: 'checkOutAutocomplete',
        allowedRoles: [
          roles.manager,
          roles.employeeChash,  
        ],
      },

      sellImport: {
        id: 'sellImport',
        allowedRoles: [
          roles.manager, 
        ],
      },
      sellCreate: {
        id: 'sellCreate',
        allowedRoles: [
          roles.manager, 
        ],
        allowedStorageFolders: ['sell'],
      },
      sellEdit: {
        id: 'sellEdit',
        allowedRoles: [
          roles.manager, 
        ],
        allowedStorageFolders: ['sell'],
      },
      sellDestroy: {
        id: 'sellDestroy',
        allowedRoles: [
          roles.manager, 
        ],
        allowedStorageFolders: ['sell'],
      },
      sellRead: {
        id: 'sellRead',
        allowedRoles: [
          roles.manager, 
        ],
      },
      sellAutocomplete: {
        id: 'sellAutocomplete',
        allowedRoles: [
          roles.manager,  
        ],
      },
    };
  }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}

module.exports = Permissions;
