import { createContext, useContext, useState } from 'react';

const ActiveLinkContext = createContext();

export const ActiveLinkProvider = ({ children = null }) => {
    const [activeLink, setActiveLink] = useState('/');

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
    window.scrollTo(0, 0);
  };


  return (
    <ActiveLinkContext.Provider value={{ activeLink, handleNavLinkClick }}>
      {children}
    </ActiveLinkContext.Provider>
  );
};

export const useActiveLink = () => {
  return useContext(ActiveLinkContext);
};
