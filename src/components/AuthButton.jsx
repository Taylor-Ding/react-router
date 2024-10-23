import { useAuth } from '../contexts/AuthContext';

const AuthButton = ({ permission, children }) => {
  const { hasPermission } = useAuth();

  if (!hasPermission(permission)) {
    return null;
  }

  return children;
};

export default AuthButton;