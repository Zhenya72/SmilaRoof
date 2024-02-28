import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(true);

  useEffect(() => {
    const checkToken = async () => {
      const token = await localStorage.getItem('authToken');
      if (token) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
    };
    checkToken();
  }, []);

  const loginIn = (token) => {
    setAuthenticated(true);
    localStorage.setItem('authToken', token);
  };

  const logout = () => {
    setAuthenticated(false);
    localStorage.removeItem('authToken');
  };

  return (
    <AuthContext.Provider value={{ authenticated, loginIn, logout }}>
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
