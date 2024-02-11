import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Menu'
import HeadProducts from './HeadProducts'
import './Header.css';

function Header() {
  return (
    <header className='header'>
      <Container>
        <Menu />  
      </Container>
      <HeadProducts />  
    </header>
  );
}

export default Header;