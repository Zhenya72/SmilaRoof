import { Container } from 'react-bootstrap';
import Menu from './Menu'
import HeadProducts from './HeadProducts'
import './Header.scss';

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