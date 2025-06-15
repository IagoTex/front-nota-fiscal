export const navigation = [
  {
    text: 'Home',
    path: '/home',
    icon: 'home'
  },
  {
    text: 'CRUDS',
    icon: 'folder',
    items: [
      {
        text: 'Clientes',
        path: '/cliente'
      },
      {
        text: 'Produtos',
        path: '/produto'
      },
      {
        text: 'Notas Fiscais',
        path: '/nota'
      }
    ]
  }
];
