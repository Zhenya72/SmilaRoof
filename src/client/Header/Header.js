import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar, Offcanvas, Button } from 'react-bootstrap';
import { Cart2 } from 'react-bootstrap-icons';
import Logo from '../../img/logo.png';
import { useActiveLink } from '../Context/ActiveLinkContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

function Header() {

  const { activeLink, handleNavLinkClick } = useActiveLink();
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const closeOffcanvas = () => {
    setShowOffcanvas(false);
  }
  return (
    <header className='header'>
        <Navbar expand="lg" className='bg-body-tertiary mb-3 nav'>
          <Container>
          <Navbar.Brand as={NavLink} to="/">
            <img
              src={Logo}
              alt="Logo"
              height="115"
              className="d-inline-block align-top"
              onClick={() => {
                handleNavLinkClick('/');
                closeOffcanvas();
              }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} onClick={() => setShowOffcanvas(!showOffcanvas)} />
          <Navbar.Offcanvas
            show={showOffcanvas}
            onHide={closeOffcanvas}
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  Меню
                </Offcanvas.Title>
              </Offcanvas.Header>
            <Offcanvas.Body className="d-flex align-items-center pt-2">
                <Nav className="d-flex align-items-center flex-grow-1 pe-3">
              <Nav.Link
                  style={{ color: activeLink === '/' ? 'rgb(218, 71, 64)' : '' }}
                  className='menu_item'
                  as={NavLink}
                  to="/"
                  onClick={() => {
                    handleNavLinkClick('/');
                    closeOffcanvas();
                  }}
              >Головна</Nav.Link>
               <Nav.Link
                style={{ color: activeLink === '/about' ? 'rgb(218, 71, 64)' : '' }}
                className='menu_item'
                as={NavLink}
                to='/about'
                onClick={() => {
                    handleNavLinkClick('/about');
                    closeOffcanvas();
                  }}
              >
                Про нас
              </Nav.Link>
              <Nav.Link
                style={{ color: activeLink === '/products' ? 'rgb(218, 71, 64)' : '' }}
                className='menu_item'
                as={NavLink}
                to='/products'
                onClick={() => {
                    handleNavLinkClick('/products');
                    closeOffcanvas();
                  }}
              >
                Каталог товарів
              </Nav.Link>
              <Nav.Link
                style={{ color: activeLink === '/delivery' ? 'rgb(218, 71, 64)' : '' }}
                className='menu_item'
                as={NavLink}
                to='/delivery'
                onClick={() => {
                    handleNavLinkClick('/delivery');
                    closeOffcanvas();
                  }}
              >
                Доставка й оплата
              </Nav.Link>
              <Nav.Link
                style={{ color: activeLink === '/contacts' ? 'rgb(218, 71, 64)' : '' }}
                className='menu_item'
                as={NavLink}
                to='/contacts'
                onClick={() => {
                    handleNavLinkClick('/contacts');
                    closeOffcanvas();
                  }}
              >
                Контакти
              </Nav.Link>
              </Nav>
              <Button className="p-2 px-3 mt-auto header_btn" variant="success"><Cart2/></Button>
              </Offcanvas.Body>
          </Navbar.Offcanvas>
      </Container>
        </Navbar>
    </header>
  );
}

export default Header;
