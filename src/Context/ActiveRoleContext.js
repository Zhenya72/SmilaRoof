// import React, { createContext, useContext, useState, useEffect } from 'react';
// // import { useHistory } from 'react-router-dom';

// const ActiveRoleContext = createContext();

// export const ActiveRoleProvider = ({ children }) => {
//   const [activeRole, setActiveRole] = useState('client'); // 'client' by default
//   // const history = useHistory();

//   useEffect(() => {
//     const path = history.location.pathname;
//     if (path.startsWith('/admin')) {
//       setActiveRole('admin');
//     } else {
//       setActiveRole('client');
//     }
//   }, [history.location.pathname]);

//   const switchToAdmin = () => {
//     setActiveRole('admin');
//     history.push('/admin'); 
//   };

//   const switchToClient = () => {
//     setActiveRole('client');
//     history.push('/home'); 
//   };

//   return (
//     <ActiveRoleContext.Provider value={{ activeRole, switchToAdmin, switchToClient }}>
//       {children}
//     </ActiveRoleContext.Provider>
//   );
// };

// export const useActiveRole = () => {
//   const context = useContext(ActiveRoleContext);
//   if (!context) {
//     throw new Error('useActiveRole must be used within an ActiveRoleProvider');
//   }
//   return context;
// };
