export const mockUserPermissions = [
  'dashboard.view',
  'system.user.view',
  'system.user.edit',
  'system.role.view',
  'system.tool.view',
  'system.tool.edit'
];

export const mockMenuData = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    icon: 'DashboardOutlined',
    permission: 'dashboard.view',
    path: '/dashboard'
  },
  {
    key: 'system',
    label: 'System Management',
    icon: 'SettingOutlined',
    children: [
      {
        key: 'user',
        label: 'User Management',
        permission: 'system.user.view',
        path: '/system/user'
      },
      {
        key: 'role',
        label: 'Role Management',
        permission: 'system.role.view',
        path: '/system/role'
      },
      {
        key: 'tool',
        label: 'Tools Management',
        permission: 'system.tool.view',
        path: '/system/tool'
      }
    ]
  }
];