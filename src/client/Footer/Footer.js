import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { TelephoneFill, EnvelopeAtFill, GeoAltFill } from 'react-bootstrap-icons';
import Logo from '../../img/logo.png';
import { useActiveLink } from '../Context/ActiveLinkContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

function Footer() {
  const { activeLink, handleNavLinkClick } = useActiveLink();

  return (
    <footer className='footer'>
      <Container>
        <Row className='footer_conteiner text-md-start my-3'>
          <Col md={4} className='mb-3'>
        <div>
          <Navbar.Brand as={NavLink} to="/">
            <img src={Logo} alt="Logo" onClick={() => handleNavLinkClick('/')} />
          </Navbar.Brand>
            </div>
          </Col>
        <Col md={4} className='mb-3'>
          <Nav className='footer__links'>
            <Nav.Link
              as={NavLink}
              to="/"
              onClick={() => handleNavLinkClick('/')}
              style={{ color: activeLink === '/' ? 'rgb(218, 71, 64)' : '' }}>
              Головна
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/about"
              onClick={() => handleNavLinkClick('/about')}
              style={{ color: activeLink === '/about' ? 'rgb(218, 71, 64)' : '' }}>
              Про нас
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/products"
              onClick={() => handleNavLinkClick('/products')}
              style={{ color: activeLink === '/products' ? 'rgb(218, 71, 64)' : '' }}>
              Каталог товарів
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/delivery"
              onClick={() => handleNavLinkClick('/delivery')}
              style={{ color: activeLink === '/delivery' ? 'rgb(218, 71, 64)' : '' }}>
              Доставка й оплата
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/contacts"
              onClick={() => handleNavLinkClick('/contacts')}
              style={{ color: activeLink === '/contacts' ? 'rgb(218, 71, 64)' : '' }}>
              Контакти
            </Nav.Link>
          </Nav>
          </Col>
          <Col md={4}>
        <div className='footer__contact-info'>
          <address>
            <ul className="list-unstyled list">
              <li><TelephoneFill className='icon'/><a className="link" href="tel:+380505121566">(050) 512-15-66</a></li>
              <li><EnvelopeAtFill className='icon'/><a className="link" href="malito:example@gmail.com">example@gmail.com</a></li>
              <li><GeoAltFill className='icon'/><a className="link light_color" href="https://maps.app.goo.gl/1d2LycgDX4f71n3Y9" target="_blank" rel="noreferrer">Україна, м. Сміла, <br/>вул. Севастопольська 27</a></li>
            </ul>
          </address>
            </div>
          </Col>
          </Row>
      </Container>
    </footer>
  );
}

export default Footer;
