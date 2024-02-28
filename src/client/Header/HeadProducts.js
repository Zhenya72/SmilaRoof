import { List, CartCheckFill, Search } from 'react-bootstrap-icons';
import { Container } from 'react-bootstrap';


function HeadProducts() {

  return (
    <div className="header__products">
      <Container className='header__products_conteiner'>
        <div className="header__products_button">
          <button> <List style={{fontSize:'25px'}}/> Каталог товарів</button>
        </div>
        <div className="header__products_input">
          <Search style={{fontSize:'25px'}}/>
          <input type="text" placeholder="Пошук товарів" />
        </div>
        <div className="header__products_button">
          <button className='basket__container'>
            <CartCheckFill className='basket' />
            <span>0</span>
          </button>
        </div>
      </Container>
    </div>
  );
}

export default HeadProducts;