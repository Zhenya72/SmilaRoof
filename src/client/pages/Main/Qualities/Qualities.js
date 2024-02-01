import { Container, Row, Col } from 'react-bootstrap';
import approach from '../../../../img/approach.jpg';
import delivery from '../../../../img/delivery.jpg';
import execution from '../../../../img/execution.jpg';
import quality from '../../../../img/quality.jpg';
import range from '../../../../img/range.jpg';
import service from '../../../../img/service.jpg';
import './Qualities.css'
function Qualities() {
  return (
      <section className='qualities'>
        <Container>
          <Row xs={2} md={2} lg={3} xl={6} className='g-4 qualities_row'>
            <Col>
              <div className='qualities-item'>
                <img src={quality} alt='quality' />
                <p>Висока <br/> якість</p>
              </div>
            </Col>
            <Col>
              <div className='qualities-item'>
                <img src={approach} alt='approach' />
                <p>Індивідуальний <br/> підхід</p>
              </div>
            </Col>
            <Col>
              <div className='qualities-item'>
                <img src={execution} alt='execution' />
                <p>Швидке <br/> виконання</p>
              </div>
            </Col>
            <Col>
              <div className='qualities-item'>
                <img src={service} alt='service' />
                <p>Зручний <br /> сервіс</p>
              </div>
            </Col>
            <Col>
              <div className='qualities-item'>
                <img src={range} alt='range' />
                <p>Широкий <br/> асортимент</p>
              </div>
            </Col>
            <Col>
              <div className='qualities-item'>
                <img src={delivery} alt='delivery' />
                <p>Оперативна <br/> доставка</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
  );
}

export default Qualities;






