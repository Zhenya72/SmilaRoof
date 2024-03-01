import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { ActiveRoleProvider } from './Context/ActiveRoleContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Role from './Role'

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <ActiveRoleProvider>
            <Role/>
          </ActiveRoleProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
