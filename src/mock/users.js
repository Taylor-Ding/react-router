export const mockUsers = [
  {
    username: 'admin',
    password: '123456',
    permissions: [
      'dashboard.view',
      'system.user.view',
      'system.user.edit',
      'system.role.view',
      'system.role.edit',
      'system.tool.view',
      'system.tool.edit'
    ]
  },
  {
    username: 'user',
    password: '123456',
    permissions: [
      'dashboard.view',
      'system.tool.view'
    ]
  }
];