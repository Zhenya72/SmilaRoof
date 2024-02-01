import { Routes, Route } from "react-router-dom";
import Main from '../client/pages/Main/Main'
import About from '../client/pages/About/About'
import Products from '../client/pages/Products/Products'
import Delivery from '../client/pages/Delivery/Delivery'
import Contacts from '../client/pages/Contacts/Contacts'
// import Admin from '../admin/Admin'
// import AdminLogin from '../admin/AdminLogin/AdminLogin'

function Router() {

  return (
          <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/products' element={<Products />} />
            <Route path='/delivery' element={<Delivery />} />
            <Route path='/contacts' element={<Contacts />} />
              
            <Route path='*' element={<Main />}/>
            
            {/* <Route path='/admin' exact>
              <AdminLogin />
            </Route>
            <Route path='/admin/dashboard'>
              <Admin />
            </Route> */}
    
            {/* <Redirect to='/home' /> */}
          </Routes>
  );
}

export default Router;
