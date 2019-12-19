const en = {
  common: {
    or: 'or',
    cancel: 'Cancel',
    reset: 'Reset',
    save: 'Save',
    search: 'Search',
    edit: 'Edit',
    remove: 'Remove',
    new: 'New',
    export: 'Export to Excel',
    noDataToExport: 'No data to export',
    import: 'Import',
    discard: 'Discard',
    yes: 'Yes',
    no: 'No',
    pause: 'Pause',
    areYouSure: 'Are you sure?',
    view: 'View',
    destroy: 'Delete',
    mustSelectARow: 'Must select a row',
    start: 'Start',
    end: 'End',
    food: 'Food',
    drinks: 'Drinks'
  },

  app: {
    title: 'food-app',
  },

  entities: {
    restaurant: {
      name: 'restaurant',
      label: 'Restaurants',
      menu: 'Restaurants',
      exporterFileName: 'restaurant_export',
      list: {
        menu: 'Restaurants',
        title: 'Restaurants',
      },
      create: {
        success: 'Restaurant saved successfully',
      },
      update: {
        success: 'Restaurant saved successfully',
      },
      destroy: {
        success: 'Restaurant deleted successfully',
      },
      destroyAll: {
        success: 'Restaurant(s) deleted successfully',
      },
      edit: {
        title: 'Edit Restaurant',
      },
      fields: {
        id: 'Id',
        'name': 'Name',
        'employee': 'Employee',
        'products': 'Products',
        'country': 'Country',
        'city': 'City',
        'phoneNumberRange': 'PhoneNumber',
        'phoneNumber': 'PhoneNumber',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Restaurant',
      },
      view: {
        title: 'View Restaurant',
      },
      importer: {
        title: 'Import Restaurants',
        fileName: 'restaurant_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    category: {
      name: 'category',
      label: 'Categories',
      menu: 'Categories',
      exporterFileName: 'category_export',
      list: {
        menu: 'Categories',
        title: 'Categories',
      },
      create: {
        success: 'Category saved successfully',
      },
      update: {
        success: 'Category saved successfully',
      },
      destroy: {
        success: 'Category deleted successfully',
      },
      destroyAll: {
        success: 'Category(s) deleted successfully',
      },
      edit: {
        title: 'Edit Category',
      },
      fields: {
        id: 'Id',
        'restaurant': 'Restaurant',
        'name': 'Name',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Category',
      },
      view: {
        title: 'View Category',
      },
      importer: {
        title: 'Import Categories',
        fileName: 'category_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    product: {
      name: 'product',
      label: 'Products',
      menu: 'Products',
      exporterFileName: 'product_export',
      list: {
        menu: 'Products',
        title: 'Products',
      },
      create: {
        success: 'Product saved successfully',
      },
      update: {
        success: 'Product saved successfully',
      },
      destroy: {
        success: 'Product deleted successfully',
      },
      destroyAll: {
        success: 'Product(s) deleted successfully',
      },
      edit: {
        title: 'Edit Product',
      },
      fields: {
        id: 'Id',
        'category': 'Category',
        'name': 'Name',
        'priceRange': 'Price',
        'price': 'Price',
        'photo': 'Photo',
        'stockRange': 'Stock',
        'stock': 'Stock',
        'status': 'Status',
        'productionCostRange': 'ProductionCost',
        'productionCost': 'ProductionCost',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'status': {
          'Inventory': 'Inventory',
          'Order': 'Order',
          'Bar': 'Bar',
          'Kitchen': 'Kitchen',
          'CheckOut': 'CheckOut',
          'Sell': 'Sell',
        },
      },
      new: {
        title: 'New Product',
      },
      view: {
        title: 'View Product',
      },
      importer: {
        title: 'Import Products',
        fileName: 'product_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    order: {
      name: 'order',
      label: 'Orders',
      menu: 'Orders',
      exporterFileName: 'order_export',
      list: {
        menu: 'Orders',
        title: 'Orders',
      },
      create: {
        success: 'Order saved successfully',
      },
      update: {
        success: 'Order saved successfully',
      },
      destroy: {
        success: 'Order deleted successfully',
      },
      destroyAll: {
        success: 'Order(s) deleted successfully',
      },
      edit: {
        title: 'Edit Order',
      },
      fields: {
        id: 'Id',
        'category': 'Category',
        'name': 'Name',
        'quantityRange': 'Quantity',
        'quantity': 'Quantity',
        'observation': 'Observation',
        'tableRange': 'Table',
        'table': 'Table',
        'employee': 'Employee',
        'status': 'Status',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'status': {
          'Inventory': 'Inventory',
          'Order': 'Order',
          'Bar': 'Bar',
          'Kitchen': 'Kitchen',
          'CheckOut': 'CheckOut',
          'Sell': 'Sell',
        },
      },
      new: {
        title: 'New Order',
      },
      view: {
        title: 'View Order',
      },
      importer: {
        title: 'Import Orders',
        fileName: 'order_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    bar: {
      name: 'bar',
      label: 'Bars',
      menu: 'Bars',
      exporterFileName: 'bar_export',
      list: {
        menu: 'Bars',
        title: 'Bars',
      },
      create: {
        success: 'Bar saved successfully',
      },
      update: {
        success: 'Bar saved successfully',
      },
      destroy: {
        success: 'Bar deleted successfully',
      },
      destroyAll: {
        success: 'Bar(s) deleted successfully',
      },
      edit: {
        title: 'Edit Bar',
      },
      fields: {
        id: 'Id',
        'category': 'Category',
        'name': 'Name',
        'employee': 'Employee',
        'quantityRange': 'Quantity',
        'quantity': 'Quantity',
        'status': 'Status',
        'observation': 'Observation',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'status': {
          'Inventory': 'Inventory',
          'Order': 'Order',
          'Bar': 'Bar',
          'Kitchen': 'Kitchen',
          'CheckOut': 'CheckOut',
          'Sell': 'Sell',
        },
      },
      new: {
        title: 'New Bar',
      },
      view: {
        title: 'View Bar',
      },
      importer: {
        title: 'Import Bars',
        fileName: 'bar_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    kitchen: {
      name: 'kitchen',
      label: 'Kitchens',
      menu: 'Kitchens',
      exporterFileName: 'kitchen_export',
      list: {
        menu: 'Kitchens',
        title: 'Kitchens',
      },
      create: {
        success: 'Kitchen saved successfully',
      },
      update: {
        success: 'Kitchen saved successfully',
      },
      destroy: {
        success: 'Kitchen deleted successfully',
      },
      destroyAll: {
        success: 'Kitchen(s) deleted successfully',
      },
      edit: {
        title: 'Edit Kitchen',
      },
      fields: {
        id: 'Id',
        'category': 'Category',
        'name': 'Name',
        'employee': 'Employee',
        'quantityRange': 'Quantity',
        'quantity': 'Quantity',
        'observation': 'Observation',
        'status': 'Status',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'status': {
          'Inventory': 'Inventory',
          'Order': 'Order',
          'Bar': 'Bar',
          'Kitchen': 'Kitchen',
          'CheckOut': 'CheckOut',
          'Sell': 'Sell',
        },
      },
      new: {
        title: 'New Kitchen',
      },
      view: {
        title: 'View Kitchen',
      },
      importer: {
        title: 'Import Kitchens',
        fileName: 'kitchen_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    delivery: {
      name: 'delivery',
      label: 'Deliveries',
      menu: 'Deliveries',
      exporterFileName: 'delivery_export',
      list: {
        menu: 'Deliveries',
        title: 'Deliveries',
      },
      create: {
        success: 'Delivery saved successfully',
      },
      update: {
        success: 'Delivery saved successfully',
      },
      destroy: {
        success: 'Delivery deleted successfully',
      },
      destroyAll: {
        success: 'Delivery(s) deleted successfully',
      },
      edit: {
        title: 'Edit Delivery',
      },
      fields: {
        id: 'Id',
        'tableRange': 'Table',
        'table': 'Table',
        'employee': 'Employee',
        'order': 'Order',
        'status': 'Status',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'status': {
          'Inventory': 'Inventory',
          'Order': 'Order',
          'Bar': 'Bar',
          'Kitchen': 'Kitchen',
          'CheckOut': 'CheckOut',
          'Sell': 'Sell',
        },
      },
      new: {
        title: 'New Delivery',
      },
      view: {
        title: 'View Delivery',
      },
      importer: {
        title: 'Import Deliveries',
        fileName: 'delivery_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    checkOut: {
      name: 'checkOut',
      label: 'CheckOuts',
      menu: 'CheckOuts',
      exporterFileName: 'checkOut_export',
      list: {
        menu: 'CheckOuts',
        title: 'CheckOuts',
      },
      create: {
        success: 'CheckOut saved successfully',
      },
      update: {
        success: 'CheckOut saved successfully',
      },
      destroy: {
        success: 'CheckOut deleted successfully',
      },
      destroyAll: {
        success: 'CheckOut(s) deleted successfully',
      },
      edit: {
        title: 'Edit CheckOut',
      },
      fields: {
        id: 'Id',
        'tableRange': 'Table',
        'table': 'Table',
        'employee': 'Employee',
        'category': 'Category',
        'name': 'Name',
        'quantityRange': 'Quantity',
        'quantity': 'Quantity',
        'observation': 'Observation',
        'status': 'Status',
        'totalRange': 'Total',
        'total': 'Total',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'status': {
          'Inventory': 'Inventory',
          'Order': 'Order',
          'Bar': 'Bar',
          'Kitchen': 'Kitchen',
          'CheckOut': 'CheckOut',
          'Sell': 'Sell',
        },
      },
      new: {
        title: 'New CheckOut',
      },
      view: {
        title: 'View CheckOut',
      },
      importer: {
        title: 'Import CheckOuts',
        fileName: 'checkOut_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    sell: {
      name: 'sell',
      label: 'Sells',
      menu: 'Sells',
      exporterFileName: 'sell_export',
      list: {
        menu: 'Sells',
        title: 'Sells',
      },
      create: {
        success: 'Sell saved successfully',
      },
      update: {
        success: 'Sell saved successfully',
      },
      destroy: {
        success: 'Sell deleted successfully',
      },
      destroyAll: {
        success: 'Sell(s) deleted successfully',
      },
      edit: {
        title: 'Edit Sell',
      },
      fields: {
        id: 'Id',
        'category': 'Category',
        'name': 'Name',
        'priceRange': 'Price',
        'price': 'Price',
        'quantityRange': 'Quantity',
        'quantity': 'Quantity',
        'observation': 'Observation',
        'tableRange': 'Table',
        'table': 'Table',
        'employee': 'Employee',
        'stockRange': 'Stock',
        'stock': 'Stock',
        'status': 'Status',
        'totalRange': 'Total',
        'total': 'Total',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'status': {
          'Inventory': 'Inventory',
          'Order': 'Order',
          'Bar': 'Bar',
          'Kitchen': 'Kitchen',
          'CheckOut': 'CheckOut',
          'Sell': 'Sell',
        },
      },
      new: {
        title: 'New Sell',
      },
      view: {
        title: 'View Sell',
      },
      importer: {
        title: 'Import Sells',
        fileName: 'sell_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
  },

  auth: {
    profile: {
      title: 'Edit Profile',
      success: 'Profile updated successfully',
    },
    createAnAccount: 'Create an account',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password',
    signin: 'Sign in',
    signup: 'Sign up',
    signout: 'Sign out',
    alreadyHaveAnAccount:
      'Already have an account? Sign in.',
    signinWithAnotherAccount:
      'Sign in with another account',
    emailUnverified: {
      message: `Please confirm your email at <strong>{0}</strong> to continue.`,
      submit: `Resend email verification`,
    },
    emptyPermissions: {
      message: `You have no permissions yet. Wait for the admin to grant you privileges.`,
    },
    passwordResetEmail: {
      message: 'Send password reset email',
      error: `Email not recognized`,
    },
    passwordReset: {
      message: 'Reset password',
    },
    emailAddressVerificationEmail: {
      error: `Email not recognized`,
    },
    verificationEmailSuccess: `Verification email sent successfully`,
    passwordResetEmailSuccess: `Password reset email sent successfully`,
    passwordResetSuccess: `Password changed successfully`,
    verifyEmail: {
      success: 'Email successfully verified',
      message:
        'Just a moment, your email is being verified...',
    },
  },

  roles: {
    manager: {
      label: 'Manager',
      description: 'Full access to all resources',
    },
    employeeChash: {
      label: 'Cash manager',
      description: 'Edit and access to all check outs',
    },
    employeeWaiter: {
      label: 'Waiter',
      description: 'Order and access to all the products',
    },
    employeeChef: {
      label: 'Chef',
      description: 'View and access to all drinks or food orders',
    },
    foodCustumer: {
      label: 'Customer',
      description: 'Create an order to all the waiters',
    },
     
  },

  iam: {
    title: 'Identity and Access Management',
    menu: 'IAM',
    disable: 'Disable',
    disabled: 'Disabled',
    enabled: 'Enabled',
    enable: 'Enable',
    doEnableSuccess: 'User enabled successfully',
    doDisableSuccess: 'User disabled successfully',
    doDisableAllSuccess: 'User(s) disabled successfully',
    doEnableAllSuccess: 'User(s) enabled successfully',
    doAddSuccess: 'User(s) saved successfully',
    doUpdateSuccess: 'User saved successfully',
    viewBy: 'View By',
    users: {
      name: 'users',
      label: 'Users',
      exporterFileName: 'users_export',
      doRemoveAllSelectedSuccess:
        'Permissions removed successfully',
    },
    roles: {
      label: 'Roles',
      doRemoveAllSelectedSuccess:
        'Permissions removed successfully',
    },
    edit: {
      title: 'Edit User',
    },
    new: {
      title: 'New User(s)',
      titleModal: 'New User',
      emailsHint:
        'Separate multiple email addresses using the comma character.',
    },
    view: {
      title: 'View User',
      activity: 'Activity',
    },
    importer: {
      title: 'Import Users',
      fileName: 'users_import_template',
      hint:
        'Files/Images columns must be the URLs of the files separated by space.<br/> Relationships must be the ID of the referenced records separated by space.<br/> Roles must be the role ids separated by space.',
    },
    errors: {
      userAlreadyExists:
        'User with this email already exists',
      userNotFound: 'User not found',
      disablingHimself: `You can't disable yourself`,
      revokingOwnPermission: `You can't revoke your own manager permission`,
    },
  },

  user: {
    fields: {
      id: 'Id',
      authenticationUid: 'Authentication Uid',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Name',
      firstName: 'First Name',
      lastName: 'Last Name',
      status: 'Status',
      disabled: 'Disabled',
      phoneNumber: 'Phone Number',
      role: 'Role',
      createdAt: 'Created at',
      updatedAt: 'Updated at',
      roleUser: 'Role/User',
      roles: 'Roles',
      createdAtRange: 'Created at',
      password: 'Password',
      rememberMe: 'Remember me',
    },
    enabled: 'Enabled',
    disabled: 'Disabled',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} is invalid',
    },
  },

  auditLog: {
    menu: 'Audit Logs',
    title: 'Audit Logs',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separate multiple entities using the comma character.',
    fields: {
      id: 'Id',
      timestampRange: 'Period',
      entityName: 'Entity',
      entityNames: 'Entities',
      entityId: 'Entity ID',
      action: 'Action',
      values: 'Values',
      timestamp: 'Date',
      createdByEmail: 'User Email',
    },
  },
  settings: {
    title: 'Settings',
    menu: 'Settings',
    save: {
      success:
        'Settings saved successfully. The page will reload in {0} seconds for changes to take effect.',
    },
    fields: {
      primary: 'Primary Color',
      secondary: 'Secondary Color',
      shade: 'Shade',
    },
  },
  home: {
    menu: 'Home',
    message: `This page uses fake data for demonstration purposes only. You can edit it at frontend/view/home/HomePage.js.`,
    charts: {
      day: 'Day',
      red: 'Red',
      green: 'Green',
      yellow: 'Yellow',
      grey: 'Grey',
      blue: 'Blue',
      orange: 'Orange',
      months: {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
      },
      eating: 'Eating',
      drinking: 'Drinking',
      sleeping: 'Sleeping',
      designing: 'Designing',
      coding: 'Coding',
      cycling: 'Cycling',
      running: 'Running',
      customer: 'Customer',
    },
  },
  errors: {
    backToHome: 'Back to home',
    403: `Sorry, you don't have access to this page`,
    404: 'Sorry, the page you visited does not exist',
    500: 'Sorry, the server is reporting an error',
    forbidden: {
      message: 'Forbidden',
    },
    validation: {
      message: 'An error occurred',
    },
    defaultErrorMessage: 'Ops, an error occurred',
  }, 
  validation: {
    mixed: {
      default: '${path} is invalid',
      required: '${path} is required',
      oneOf:
        '${path} must be one of the following values: ${values}',
      notOneOf:
        '${path} must not be one of the following values: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} must be a ${type}`;
      },
    },
    string: {
      length:
        '${path} must be exactly ${length} characters',
      min: '${path} must be at least ${min} characters',
      max: '${path} must be at most ${max} characters',
      matches:
        '${path} must match the following: "${regex}"',
      email: '${path} must be a valid email',
      url: '${path} must be a valid URL',
      trim: '${path} must be a trimmed string',
      lowercase: '${path} must be a lowercase string',
      uppercase: '${path} must be a upper case string',
      selected: '${path} must be selected',
    },
    number: {
      min:
        '${path} must be greater than or equal to ${min}',
      max: '${path} must be less than or equal to ${max}',
      lessThan: '${path} must be less than ${less}',
      moreThan: '${path} must be greater than ${more}',
      notEqual: '${path} must be not equal to ${notEqual}',
      positive: '${path} must be a positive number',
      negative: '${path} must be a negative number',
      integer: '${path} must be an integer',
    },
    date: {
      min: '${path} field must be later than ${min}',
      max: '${path} field must be at earlier than ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} field cannot have keys not specified in the object shape',
    },
    array: {
      min: '${path} field must have at least ${min} items',
      max:
        '${path} field must have less than or equal to ${max} items',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'You must upload an image',
    size: 'File is too big. Max allowed size is {0}',
    formats: `Invalid format. Must be '{0}'.`,
  },
  importer: {
    line: 'Line',
    status: 'Status',
    pending: 'Pending',
    imported: 'Imported',
    error: 'Error',
    total: `{0} imported, {1} pending and {2} with error`,
    importedMessage: `Processed {0} of {1}.`,
    noNavigateAwayMessage:
      'Do not navigate away from this page or import will be stopped.',
    completed: {
      success:
        'Import completed. All rows were successfully imported.',
      someErrors:
        'Processing completed, but some rows were unable to be imported.',
      allErrors: 'Import failed. There are no valid rows.',
    },
    form: {
      downloadTemplate: 'Download the template',
      hint:
        'Click or drag the file to this area to continue',
    },
    list: {
      discardConfirm:
        'Are you sure? Non-imported data will be lost.',
    },
    errors: {
      invalidFileEmpty: 'The file is empty',
      invalidFileExcel:
        'Only excel (.xlsx) files are allowed',
      invalidFileUpload:
        'Invalid file. Make sure you are using the last version of the template.',
      importHashRequired: 'Import hash is required',
      importHashExistent: 'Data has already been imported',
    },
  },

  autocomplete: {
    loading: 'Loading...',
    noOptions: 'No data found',
  },

  imagesViewer: {
    noImage: 'No image',
  },

  table: {
    noData: 'No records found',
    loading: 'Loading...',
  },

  pagination: {
    labelDisplayedRows: '{0}-{1} of {2}',
    labelRowsPerPage: 'Per page:',
  },

  firebaseErrors: {
    'auth/user-disabled': 'Your account is disabled',
    'auth/user-not-found': `Sorry, we don't recognize your credentials`,
    'auth/wrong-password': `Sorry, we don't recognize your credentials`,
    'auth/weak-password': 'This password is too weak',
    'auth/email-already-in-use': 'Email is already in use',
    'auth/invalid-email': 'Please provide a valid email',
    'auth/account-exists-with-different-credential':
      'Email is already in use for a different authentication method.',
    'auth/credential-already-in-use':
      'Credentials are already in use',
  },
};

export default en;
