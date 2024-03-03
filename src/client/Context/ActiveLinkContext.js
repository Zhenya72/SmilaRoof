import { createContext, useContext, useState, useEffect } from 'react';

const ActiveLinkContext = createContext();

export const ActiveLinkProvider = ({ children = null }) => {
  const [activeLink, setActiveLink] = useState(sessionStorage.getItem('activeLink') || '/');
 
  
  useEffect(() => {
    const handlePopState = () => {
      setActiveLink(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);
  
  
  useEffect(() => {
    sessionStorage.setItem('activeLink', activeLink);
  }, [activeLink])

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
