import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { login, fetchUserPermissions, fetchMenuData } from '../api/auth';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [permissions, setPermissions] = useState([]);
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (user) {
      initializeUserData(user.username);
    }
  }, [user]);

  const initializeUserData = async (username) => {
    setLoading(true);
    try {
      const [perms, menus] = await Promise.all([
        fetchUserPermissions(username),
        fetchMenuData()
      ]);
      setPermissions(perms);
      setMenuData(menus);
    } catch (error) {
      console.error('Failed to initialize user data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (username, password) => {
    setLoading(true);
    try {
      const userData = await login(username, password);
      setUser(userData);
      const from = location.state?.from?.pathname || '/dashboard';
      navigate(from);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setUser(null);
    setPermissions([]);
    setMenuData([]);
    navigate('/login');
  };

  const hasPermission = (requiredPermission) => {
    return permissions.includes(requiredPermission);
  };

  const filterMenusByPermission = (menus) => {
    return menus.filter(menu => {
      if (menu.children) {
        const filteredChildren = filterMenusByPermission(menu.children);
        return filteredChildren.length > 0;
      }
      return hasPermission(menu.permission);
    });
  };

  const authorizedMenus = filterMenusByPermission(menuData);

  return (
    <AuthContext.Provider value={{ 
      user,
      permissions, 
      hasPermission, 
      authorizedMenus,
      loading,
      login: handleLogin,
      logout: handleLogout
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};