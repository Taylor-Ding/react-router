import { mockUsers } from '../mock/users';
import { mockMenuData } from '../mock/permissions';

export const login = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = mockUsers.find(
        u => u.username === username && u.password === password
      );
      
      if (user) {
        resolve({
          username: user.username,
          permissions: user.permissions
        });
      } else {
        reject(new Error('Invalid username or password'));
      }
    }, 500);
  });
};

export const fetchUserPermissions = (username) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = mockUsers.find(u => u.username === username);
      resolve(user ? user.permissions : []);
    }, 500);
  });
};

export const fetchMenuData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockMenuData);
    }, 500);
  });
};