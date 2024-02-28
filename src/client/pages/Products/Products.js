import { Container } from 'react-bootstrap';
import './Products.scss'
function Products() {
    return (
      <Container className='conteiner'>        
        <h2 className="title">Каталог товарів</h2>
        <div className='products__grid'>
          <div className="products__card p-2" >
            <h4>Для даху</h4>
          </div>
          <div className="products__card p-2" >
            <h4>Пиломатеріали</h4>
          </div>
        </div>
      </Container>
  );
}

export default Products;