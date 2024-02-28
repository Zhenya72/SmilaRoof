import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { TelephoneFill, Chat } from 'react-bootstrap-icons';
import ModalConsultation from '../Components/ModalConsultation/ModalConsultation';
import Logo from '../../img/logo.png';
import { useActiveLink } from '../Context/ActiveLinkContext'
function Menu() {

  const { activeLink, handleNavLinkClick } = useActiveLink();
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const closeOffcanvas = () => {
    setShowOffcanvas(false);
  }
  
  return (
        <Navbar expand="lg" className='bg-body-tertiary nav'>
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
            <Offcanvas.Body className={`d-flex ${window.innerWidth >= 992 ? 'flex-row justify-content-between' : 'flex-column justify-content-around'} align-items-center pt-2`}>
              <Nav className="d-flex align-items-center pe-3">
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
                <address className='header__phone'>
                  <TelephoneFill className='icon' />
                  <div className='header__phone_number'>
                    <a className="link" href="tel:+380505121566">(050) 512-15-66</a>
                    <a className="link" href="tel:+380635121566">(063) 512-15-66</a>
                    <a className="link" href="tel:+380995121566">(099) 512-15-66</a>
                  </div>
                </address>
                <div className="header__question">
                  <h5>Є запитання?</h5>
                  <div>
                    <Chat className='header__icon icon' />
                    <button onClick={handleShow} className="header__link">Напишіть нам</button>
                    <ModalConsultation show={showModal} onHide={handleClose} />
                  </div>
                </div>
              </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar>
  );
}

export default Menu;