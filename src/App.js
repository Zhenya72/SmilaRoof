import React from 'react';
import { BrowserRouter } from "react-router-dom";
// import { ActiveRoleProvider } from './Context/ActiveRoleContext';
import Role from './Role'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          {/* <ActiveRoleProvider> */}
            <Role/>
          {/* </ActiveRoleProvider> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
