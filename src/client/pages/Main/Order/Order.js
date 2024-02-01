import { Container, Row, Col } from 'react-bootstrap';
import { Icon1CircleFill, Icon2CircleFill, Icon3CircleFill, Icon4CircleFill, Icon5CircleFill, Icon6CircleFill } from 'react-bootstrap-icons';
import man from '../../../../img/stages-man.png';
import './Order.css'
function Order() {
  return (
      <section className='order'>
        <Container className='order_conteiner'>
          <h3 className='subtitle'>Як зробити <span className='subtitle_span'>замовлення</span></h3>
          <div className='order_block'>
            <p className='order__paragraph'>
              Замовлення приймаймаються як в телефонному режимі так і безпосередньо в офісі. Для замовлення необхідно виконати декілька кроків:
            </p>
            <img src={man} alt='man' />
          </div>
          <ul className='order__list'>
            <Row xs={2} md={2} lg={3} xl={6} className='g-4' style={{ width: '100%', margin: '0' }}>
              <li>
                <Col>
                  <Icon1CircleFill className='order__icon' />
                  <p>Зателефонуйте <br /> менеджеру</p>
                </Col>
              </li>
              <li>
                <Col>
                  <Icon2CircleFill className='order__icon' />
                  <p>Зробіть <br /> замовлення</p>
                </Col>
              </li>
              <li>
                <Col>
                  <Icon3CircleFill className='order__icon' />
                  <p>Отримайте <br /> розрахунок</p>
                </Col>
              </li>
              <li>
                <Col>
                  <Icon4CircleFill className='order__icon' />
                  <p>Внесіть <br /> передоплату</p>
                </Col>
              </li>
              <li>
                <Col>
                  <Icon5CircleFill className='order__icon' />
                  <p>Замовте доставку, <br /> по необхідності</p>
                </Col>
              </li>
              <li>
                <Col>
                  <Icon6CircleFill className='order__icon' />
                  <p>Отримайте <br /> замовлення</p>
                </Col>
              </li>
            </Row>
          </ul>
        </Container>
      </section>
  );
}

export default Order;






