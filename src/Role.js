import React from 'react';
import { ActiveLinkProvider } from './client/Context/ActiveLinkContext'
import { useActiveRole } from './Context/ActiveRoleContext';
import Header from './client/Header/Header';
import Router from "./Router/Router";
import Footer from './client//Footer/Footer';

function Role() {
  const { activeRole } = useActiveRole();
  return (
        <ActiveLinkProvider>
            {activeRole === 'client' && <Header />}
            <main>
                <Router/>
            </main>
            {activeRole === 'client' && <Footer />}
        </ActiveLinkProvider>
  );
}

export default Role;
