import { createContext, useContext, useState, useCallback } from 'react';
import { getStoredToken, setStoredToken, clearStoredToken } from '../utils/storage';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(getStoredToken());
  const [loading, setLoading] = useState(false);

  const login = useCallback((userData, authToken) => {
    setUser(userData);
    setToken(authToken);
    setStoredToken(authToken);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setToken(null);
    clearStoredToken();
  }, []);

  const value = {
    user,
    token,
    loading,
    isAuthenticated: !!token,
    login,
    logout,
    setLoading,
    setUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
