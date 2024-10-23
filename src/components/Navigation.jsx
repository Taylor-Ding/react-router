import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import * as Icons from '@ant-design/icons';

const Navigation = () => {
  const { authorizedMenus } = useAuth();
  const navigate = useNavigate();

  const getIcon = (iconName) => {
    const Icon = Icons[iconName];
    return Icon ? <Icon /> : null;
  };

  const renderMenuItems = (items) => {
    return items.map(item => {
      if (item.children) {
        return (
          <Menu.SubMenu
            key={item.key}
            icon={getIcon(item.icon)}
            title={item.label}
          >
            {renderMenuItems(item.children)}
          </Menu.SubMenu>
        );
      }
      return (
        <Menu.Item 
          key={item.key}
          icon={getIcon(item.icon)}
          onClick={() => navigate(item.path)}
        >
          {item.label}
        </Menu.Item>
      );
    });
  };

  return (
    <Menu mode="inline" theme="dark">
      {renderMenuItems(authorizedMenus)}
    </Menu>
  );
};

export default Navigation;