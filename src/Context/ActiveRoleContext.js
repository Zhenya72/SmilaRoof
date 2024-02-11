import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const ActiveRoleContext = createContext();

export const ActiveRoleProvider = ({ children }) => {
  const [activeRole, setActiveRole] = useState('client'); 
  const location = useLocation()
  useEffect(() => {
    const path = location.pathname;
    if (path.startsWith('/admin')) {
      setActiveRole('admin'); 
    } else {
      setActiveRole('client'); 
    }
  }, [location.pathname]);

  const switchToAdmin = () => {
    setActiveRole('admin');
    location.href = '/admin'; 
  };

  const switchToClient = () => {
    setActiveRole('client');
    location.href = '/home'; 
  };

  return (
    <ActiveRoleContext.Provider value={{ activeRole, switchToAdmin, switchToClient }}>
      {children}
    </ActiveRoleContext.Provider>
  );
};

export const useActiveRole = () => {
  const context = useContext(ActiveRoleContext);
  if (!context) {
    throw new Error('useActiveRole must be used within an ActiveRoleProvider');
  }
  return context;
};
