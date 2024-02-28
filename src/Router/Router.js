import { Routes, Route } from "react-router-dom";
import Main from '../client/pages/Main/Main'
import About from '../client/pages/About/About'
import Products from '../client/pages/Products/Products'
import Delivery from '../client/pages/Delivery/Delivery'
import Contacts from '../client/pages/Contacts/Contacts'
import Admin from '../admin/Admin'
import AdminLogin from '../admin/AdminLogin/AdminLogin'
import CategoryPage from '../admin/pages/CategoryPage'
import SubcategoryPage from'../admin/pages/SubcategoryPage'
import { AuthProvider } from '../Context/AuthContext'
import { RequierAuth } from './RequierAuth'

function Router() {

  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='about' element={<About />}/>
        <Route path='delivery' element={<Delivery />} />
        <Route path='contacts' element={<Contacts />} />
        <Route path='products' element={<Products />} />
        
        <Route path='admin' element={<AdminLogin />} />            
        <Route path="admin/dashboard" element={
          <RequierAuth>
            <Admin />
          </RequierAuth>
        } />
        <Route path="admin/categories/:categoryID" element={
          <RequierAuth>
            <CategoryPage />
          </RequierAuth>
        } />
        <Route path="admin/categories/:categoryID/subcategory/:subcategoryID" element={
          <RequierAuth>
            <SubcategoryPage />
          </RequierAuth>
        } />
        
        <Route path='*' element={<Main />}/>
      </Routes>
    </AuthProvider>
  );
}

export default Router;
