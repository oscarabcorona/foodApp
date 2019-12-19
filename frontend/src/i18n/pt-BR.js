const ptBR = {
  common: {
    or: 'ou',
    cancel: 'Cancelar',
    reset: 'Limpar',
    save: 'Salvar',
    search: 'Buscar',
    edit: 'Editar',
    remove: 'Remover',
    new: 'Novo',
    export: 'Exportar para Excel',
    noDataToExport: 'Não há dados para exportar',
    import: 'Importar',
    discard: 'Descartar',
    yes: 'Sim',
    no: 'Não',
    pause: 'Pausar',
    areYouSure: 'Tem certeza?',
    view: 'Visualizar',
    destroy: 'Deletar',
    mustSelectARow: 'Selecine uma linha',
    start: 'Inicio',
    end: 'Fim',
  },

  app: {
    title: 'Aplicação',
  },

  entities: {
    restaurant: {
      name: 'Restaurant',
      label: 'Restaurants',
      menu: 'Restaurants',
      exporterFileName: 'Restaurant_exportados',
      list: {
        menu: 'Restaurants',
        title: 'Restaurants',
      },
      create: {
        success: 'Restaurant salvo com sucesso',
      },
      update: {
        success: 'Restaurant salvo com sucesso',
      },
      destroy: {
        success: 'Restaurant deletado com sucesso',
      },
      destroyAll: {
        success: 'Restaurant(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Restaurant',
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
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {

      },
      new: {
        title: 'Novo Restaurant',
      },
      view: {
        title: 'Visualizar Restaurant',
      },
      importer: {
        title: 'Importar Restaurants',
        fileName: 'restaurant_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    category: {
      name: 'Category',
      label: 'Categories',
      menu: 'Categories',
      exporterFileName: 'Category_exportados',
      list: {
        menu: 'Categories',
        title: 'Categories',
      },
      create: {
        success: 'Category salvo com sucesso',
      },
      update: {
        success: 'Category salvo com sucesso',
      },
      destroy: {
        success: 'Category deletado com sucesso',
      },
      destroyAll: {
        success: 'Category(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Category',
      },
      fields: {
        id: 'Id',
        'restaurant': 'Restaurant',
        'name': 'Name',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {

      },
      new: {
        title: 'Novo Category',
      },
      view: {
        title: 'Visualizar Category',
      },
      importer: {
        title: 'Importar Categories',
        fileName: 'category_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    product: {
      name: 'Product',
      label: 'Products',
      menu: 'Products',
      exporterFileName: 'Product_exportados',
      list: {
        menu: 'Products',
        title: 'Products',
      },
      create: {
        success: 'Product salvo com sucesso',
      },
      update: {
        success: 'Product salvo com sucesso',
      },
      destroy: {
        success: 'Product deletado com sucesso',
      },
      destroyAll: {
        success: 'Product(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Product',
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
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
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
        title: 'Novo Product',
      },
      view: {
        title: 'Visualizar Product',
      },
      importer: {
        title: 'Importar Products',
        fileName: 'product_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    order: {
      name: 'Order',
      label: 'Orders',
      menu: 'Orders',
      exporterFileName: 'Order_exportados',
      list: {
        menu: 'Orders',
        title: 'Orders',
      },
      create: {
        success: 'Order salvo com sucesso',
      },
      update: {
        success: 'Order salvo com sucesso',
      },
      destroy: {
        success: 'Order deletado com sucesso',
      },
      destroyAll: {
        success: 'Order(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Order',
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
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
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
        title: 'Novo Order',
      },
      view: {
        title: 'Visualizar Order',
      },
      importer: {
        title: 'Importar Orders',
        fileName: 'order_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    bar: {
      name: 'Bar',
      label: 'Bars',
      menu: 'Bars',
      exporterFileName: 'Bar_exportados',
      list: {
        menu: 'Bars',
        title: 'Bars',
      },
      create: {
        success: 'Bar salvo com sucesso',
      },
      update: {
        success: 'Bar salvo com sucesso',
      },
      destroy: {
        success: 'Bar deletado com sucesso',
      },
      destroyAll: {
        success: 'Bar(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Bar',
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
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
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
        title: 'Novo Bar',
      },
      view: {
        title: 'Visualizar Bar',
      },
      importer: {
        title: 'Importar Bars',
        fileName: 'bar_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    kitchen: {
      name: 'Kitchen',
      label: 'Kitchens',
      menu: 'Kitchens',
      exporterFileName: 'Kitchen_exportados',
      list: {
        menu: 'Kitchens',
        title: 'Kitchens',
      },
      create: {
        success: 'Kitchen salvo com sucesso',
      },
      update: {
        success: 'Kitchen salvo com sucesso',
      },
      destroy: {
        success: 'Kitchen deletado com sucesso',
      },
      destroyAll: {
        success: 'Kitchen(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Kitchen',
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
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
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
        title: 'Novo Kitchen',
      },
      view: {
        title: 'Visualizar Kitchen',
      },
      importer: {
        title: 'Importar Kitchens',
        fileName: 'kitchen_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    delivery: {
      name: 'Delivery',
      label: 'Deliveries',
      menu: 'Deliveries',
      exporterFileName: 'Delivery_exportados',
      list: {
        menu: 'Deliveries',
        title: 'Deliveries',
      },
      create: {
        success: 'Delivery salvo com sucesso',
      },
      update: {
        success: 'Delivery salvo com sucesso',
      },
      destroy: {
        success: 'Delivery deletado com sucesso',
      },
      destroyAll: {
        success: 'Delivery(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Delivery',
      },
      fields: {
        id: 'Id',
        'tableRange': 'Table',
        'table': 'Table',
        'employee': 'Employee',
        'order': 'Order',
        'status': 'Status',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
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
        title: 'Novo Delivery',
      },
      view: {
        title: 'Visualizar Delivery',
      },
      importer: {
        title: 'Importar Deliveries',
        fileName: 'delivery_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    checkOut: {
      name: 'CheckOut',
      label: 'CheckOuts',
      menu: 'CheckOuts',
      exporterFileName: 'CheckOut_exportados',
      list: {
        menu: 'CheckOuts',
        title: 'CheckOuts',
      },
      create: {
        success: 'CheckOut salvo com sucesso',
      },
      update: {
        success: 'CheckOut salvo com sucesso',
      },
      destroy: {
        success: 'CheckOut deletado com sucesso',
      },
      destroyAll: {
        success: 'CheckOut(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar CheckOut',
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
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
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
        title: 'Novo CheckOut',
      },
      view: {
        title: 'Visualizar CheckOut',
      },
      importer: {
        title: 'Importar CheckOuts',
        fileName: 'checkOut_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    sell: {
      name: 'Sell',
      label: 'Sells',
      menu: 'Sells',
      exporterFileName: 'Sell_exportados',
      list: {
        menu: 'Sells',
        title: 'Sells',
      },
      create: {
        success: 'Sell salvo com sucesso',
      },
      update: {
        success: 'Sell salvo com sucesso',
      },
      destroy: {
        success: 'Sell deletado com sucesso',
      },
      destroyAll: {
        success: 'Sell(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Sell',
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
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
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
        title: 'Novo Sell',
      },
      view: {
        title: 'Visualizar Sell',
      },
      importer: {
        title: 'Importar Sells',
        fileName: 'sell_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },
  },

  auth: {
    profile: {
      title: 'Editar Perfil',
      success: 'Perfil atualizado com sucesso',
    },
    createAnAccount: 'Criar uma conta',
    rememberMe: 'Lembrar-me',
    forgotPassword: 'Esqueci minha senha',
    signin: 'Entrar',
    signup: 'Registrar',
    signout: 'Sair',
    alreadyHaveAnAccount: 'Já possui uma conta? Entre.',
    signinWithAnotherAccount: 'Entrar com outra conta',
    emailUnverified: {
      message: `Por favor, confirme seu email em <strong>{0}</strong> para continuar.`,
      submit: `Reenviar confirmação por email`,
    },
    emptyPermissions: {
      message: `Você ainda não possui permissões. Aguarde o administrador conceder seus privilégios.`,
    },
    passwordResetEmail: {
      message: 'Enviar email de redefinição de senha',
      error: `Email não encontrado`,
    },
    passwordReset: {
      message: 'Alterar senha',
    },
    emailAddressVerificationEmail: {
      error: `Email não encontrado`,
    },
    verificationEmailSuccess: `Verificação de email enviada com sucesso`,
    passwordResetEmailSuccess: `Email de redefinição de senha enviado com sucesso`,
    passwordResetSuccess: `Senha alterada com sucesso`,
    verifyEmail: {
      success: 'Email verificado com sucesso',
      message:
        'Aguarde um momento, seu email está sendo verificado...',
    },
  },

  roles: {
    owner: {
      label: 'Proprietário',
      description: 'Acesso completo a todos os recursos',
    },
    editor: {
      label: 'Editor',
      description: 'Acesso para edição a todos os recursos',
    },
    viewer: {
      label: 'Visualizador',
      description:
        'Acesso de visualização a todos os recursos',
    },
    auditLogViewer: {
      label: 'Visualizador de Registros de Autoria',
      description:
        'Acesso de visualização dos registros de autoria',
    },
    iamSecurityReviewer: {
      label: 'Revisor de segurança',
      description: `Acesso total para gerenciar as funções do usuário`,
    },
    entityEditor: {
      label: 'Editor de Entidades',
      description: 'Acesso de edição a todas as entidades',
    },
    entityViewer: {
      label: 'Visualizador de Entidades',
      description:
        'Acesso de visualização a todas as entidades',
    },
    restaurantEditor: {
      label: 'Editor de Restaurants',
      description: 'Acesso de edição aos Restaurants',
    },
    restaurantViewer: {
      label: 'Visualizador de Restaurants',
      description: 'Acesso de visualização aos Restaurants',
    },
    categoryEditor: {
      label: 'Editor de Categories',
      description: 'Acesso de edição aos Categories',
    },
    categoryViewer: {
      label: 'Visualizador de Categories',
      description: 'Acesso de visualização aos Categories',
    },
    productEditor: {
      label: 'Editor de Products',
      description: 'Acesso de edição aos Products',
    },
    productViewer: {
      label: 'Visualizador de Products',
      description: 'Acesso de visualização aos Products',
    },
    orderEditor: {
      label: 'Editor de Orders',
      description: 'Acesso de edição aos Orders',
    },
    orderViewer: {
      label: 'Visualizador de Orders',
      description: 'Acesso de visualização aos Orders',
    },
    barEditor: {
      label: 'Editor de Bars',
      description: 'Acesso de edição aos Bars',
    },
    barViewer: {
      label: 'Visualizador de Bars',
      description: 'Acesso de visualização aos Bars',
    },
    kitchenEditor: {
      label: 'Editor de Kitchens',
      description: 'Acesso de edição aos Kitchens',
    },
    kitchenViewer: {
      label: 'Visualizador de Kitchens',
      description: 'Acesso de visualização aos Kitchens',
    },
    deliveryEditor: {
      label: 'Editor de Deliveries',
      description: 'Acesso de edição aos Deliveries',
    },
    deliveryViewer: {
      label: 'Visualizador de Deliveries',
      description: 'Acesso de visualização aos Deliveries',
    },
    checkOutEditor: {
      label: 'Editor de CheckOuts',
      description: 'Acesso de edição aos CheckOuts',
    },
    checkOutViewer: {
      label: 'Visualizador de CheckOuts',
      description: 'Acesso de visualização aos CheckOuts',
    },
    sellEditor: {
      label: 'Editor de Sells',
      description: 'Acesso de edição aos Sells',
    },
    sellViewer: {
      label: 'Visualizador de Sells',
      description: 'Acesso de visualização aos Sells',
    },
  },

  iam: {
    title: 'Gerenciamento de usuários e permissões',
    menu: 'IAM',
    disable: 'Desabilitar',
    disabled: 'Desabilitado',
    enabled: 'Habilitado',
    enable: 'Habilitar',
    doEnableSuccess: 'Usuário habilitado com sucesso',
    doDisableSuccess: 'Usuário desabilitado com sucesso',
    doDisableAllSuccess:
      'Usuário(s) desabilitado(s) com sucesso',
    doEnableAllSuccess:
      'Usuário(s) habilidatos com sucesso',
    doAddSuccess: 'Usuário(s) salvos com sucesso',
    doUpdateSuccess: 'Usuário salvo com sucesso',
    viewBy: 'Visualizar por',
    users: {
      name: 'users',
      label: 'Usuários',
      exporterFileName: 'usuarios_exportados',
      doRemoveAllSelectedSuccess:
        'Permissões removidas com sucesso',
    },
    roles: {
      label: 'Perfis',
      doRemoveAllSelectedSuccess:
        'Permissões removidas com sucesso',
    },
    edit: {
      title: 'Editar usuário',
    },
    new: {
      title: 'Novo(s) Usuário(s)',
      titleModal: 'Novo Usuário',
      emailsHint:
        'Separe múltiplos endereços de e-mail usando a vírgula.',
    },
    view: {
      title: 'Visualizar Usuário',
      activity: 'Atividades',
    },
    importer: {
      title: 'Importar Usuários',
      fileName: 'usuarios_template_importacao',
      hint:
      'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço.<br/> Relacionamentos devem ser os IDs separados por espaço.',
    },
    errors: {
      userAlreadyExists: 'Usuário com este email já existe',
      userNotFound: 'Usuário não encontrado',
      disablingHimself: `Você não pode desativar-se`,
      revokingOwnPermission: `Você não pode revogar sua própria permissão de proprietário`,
    },
  },

  user: {
    fields: {
      id: 'Id',
      authenticationUid: 'Id de autenticação',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nome',
      firstName: 'Nome',
      lastName: 'Sobrenome',
      status: 'Estado',
      disabled: 'Desativado',
      phoneNumber: 'Telefone',
      role: 'Perfil',
      createdAt: 'Criado em',
      updatedAt: 'Atualizado em',
      roleUser: 'Perfil/Usuário',
      roles: 'Perfis',
      createdAtRange: 'Criado em',
      password: 'Senha',
      rememberMe: 'Lembrar-me',
    },
    enabled: 'Habilitado',
    disabled: 'Desabilitado',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} é inválido',
    },
  },

  auditLog: {
    menu: 'Registros de Auditoria',
    title: 'Registros de Auditoria',
    exporterFileName: 'registros_autoria_exportados',
    entityNamesHint:
      'Separe múltiplas entidades por vírgula',
    fields: {
      id: 'Id',
      timestampRange: 'Período',
      entityName: 'Entidade',
      entityNames: 'Entidades',
      entityId: 'ID da Entidade',
      action: 'Ação',
      values: 'Valores',
      timestamp: 'Data',
      createdByEmail: 'Email do Usuário',
    },
  },
  settings: {
    title: 'Configurações',
    menu: 'Configurações',
    save: {
      success:
        'Configurações salvas com sucesso. A página irá recarregar em {0} para que as alterações tenham efeito.',
    },
    fields: {
      primary: 'Cor Primária',
      secondary: 'Cor Secundária',
      shade: 'Tom',
    },
  },
  home: {
    menu: 'Inicial',
    message: `Esta página usa dados falsos apenas para fins de demonstração. Você pode editá-la em frontend/view/home/HomePage.js.`,
    charts: {
      day: 'Dia',
      red: 'Vermelho',
      green: 'Verde',
      yellow: 'Amarelho',
      grey: 'Cinza',
      blue: 'Azul',
      orange: 'Laranja',
      months: {
        1: 'Janeiro',
        2: 'Fevereiro',
        3: 'Março',
        4: 'Abril',
        5: 'Maio',
        6: 'Junho',
        7: 'Julho',
      },
      eating: 'Comendo',
      drinking: 'Bebendo',
      sleeping: 'Dormindo',
      designing: 'Projetando',
      coding: 'Codificando',
      cycling: 'Pedalando',
      running: 'Correndo',
      customer: 'Cliente',
    },
  },
  errors: {
    backToHome: 'Voltar a página inicial',
    403: `Desculpe, você não tem acesso a esta página`,
    404: 'Desculpe, a página que você visitou não existe',
    500: 'Desculpe, o servidor está relatando um erro',
    forbidden: {
      message: 'Acesso negado',
    },
    validation: {
      message: 'Ocorreu um erro',
    },
    defaultErrorMessage: 'Ops, ocorreu um erro',
  },
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} é inválido',
      required: '${path} é obrigatório',
      oneOf:
        '${path} deve ser um dos seguintes valores: ${values}',
      notOneOf:
        '${path} não deve ser um dos seguintes valores: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} deve ser um ${type}`;
      },
    },
    string: {
      length: '${path} deve possuir ${length} caracteres',
      min:
        '${path} deve possuir ao menos ${min} caracteres',
      max:
        '${path} deve possui no máximo ${max} caracteres',
      matches:
        '${path} deve respeitar o padrão: "${regex}"',
      email: '${path} deve ser um email válido',
      url: '${path} deve ser uma URL válida',
      trim:
        '${path} deve ser uma palavra sem espaços em branco',
      lowercase: '${path} deve ser minúsculo',
      uppercase: '${path} deve ser maiúsculo',
      selected: '${path} deve ser selecionado',
    },
    number: {
      min: '${path} deve ser maior ou igual a ${min}',
      max: '${path} deve ser menor ou igual a ${max}',
      lessThan: '${path} deve ser menor que ${less}',
      moreThan: '${path} deve ser maior que ${more}',
      notEqual: '${path} não deve ser igual a ${notEqual}',
      positive: '${path} deve ser um número positivo',
      negative: '${path} deve ser um número negativo',
      integer: '${path} deve ser um inteiro',
    },
    date: {
      min: '${path} deve ser posterior a ${min}',
      max: '${path} deve ser mais cedo do que ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} não pode ter atributos não especificados no formato do objeto',
    },
    array: {
      min: '${path} deve possuir ao menos ${min} itens',
      max: '${path} deve possuir no máximo ${max} itens',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'Você deve fazer upload de uma imagem',
    size:
      'O arquivo é muito grande. O tamanho máximo permitido é {0}',
    formats: `Formato inválido. Deve ser: '{0}'.`,
  },
  importer: {
    line: 'Linha',
    status: 'Estado',
    pending: 'Pendente',
    imported: 'Importado',
    error: 'Erro',
    total: `{0} importado, {1} pendente e {2} com erro`,
    importedMessage: `Processados {0} de {1}.`,
    noNavigateAwayMessage:
      'Não saia desta página ou a importação será interrompida.',
    completed: {
      success:
        'Importação concluída. Todas as linhas foram importadas com sucesso.',
      someErrors:
        'O processamento foi concluído, mas algumas linhas não puderam ser importadas.',
      allErrors:
        'Importação falhou. Não há linhas válidas.',
    },
    form: {
      downloadTemplate: 'Baixe o modelo',
      hint:
        'Clique ou arraste o arquivo para esta área para continuar.',
    },
    list: {
      discardConfirm:
        'Você tem certeza? Dados não importados serão perdidos.',
    },
    errors: {
      invalidFileEmpty: 'O arquivo está vazio',
      invalidFileExcel:
        'Apenas arquivos Excel (.xlsx) são permitidos',
      invalidFileUpload:
        'Arquivo inválido. Verifique se você está usando a última versão do modelo.',
      importHashRequired: 'Hash de importação é necessário',
      importHashExistent: 'Dados já foram importados',
    },
  },

  autocomplete: {
    loading: 'Carregando...',
    noOptions: 'Não foram encontrados resultados',
  },

  imagesViewer: {
    noImage: 'Sem imagem',
  },

  table: {
    noData: 'Nenhum Registro Encontrado',
    loading: 'Carregando...',
  },

  pagination: {
    labelDisplayedRows: '{0}-{1} de {2}',
    labelRowsPerPage: 'Por página:',
  },

  firebaseErrors: {
    'auth/user-disabled': 'Sua conta está desativada',
    'auth/user-not-found': `Desculpe, não reconhecemos suas credenciais`,
    'auth/wrong-password': `Desculpe, não reconhecemos suas credenciais`,
    'auth/weak-password': 'Esta senha é muito fraca',
    'auth/email-already-in-use':
      'O email já está sendo usado',
    'auth/invalid-email':
      'Por favor forneça um email válido',
    'auth/account-exists-with-different-credential':
      'O email já está em uso para um método de autenticação diferente.',
    'auth/credential-already-in-use':
      'Credenciais já estão em uso',
  },
};

export default ptBR;
