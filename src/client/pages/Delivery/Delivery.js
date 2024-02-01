import { Container, Row, Col } from 'react-bootstrap';
import DeliverySection from './DeliverySection'
import PaymentSection from './PaymentSection'
import ThankSection from './ThankSection'
function Delivery() {
    return (
      <Container className='conteiner'>        
        <h2 className="title">Доставка й оплата</h2>
        <Row>
          <Col xs={12} md={12} lg={6}>
            <DeliverySection/>
          </Col>
          <Col xs={12} md={12} lg={6}>
            <PaymentSection/>
          </Col>
        </Row>
        <Row>
          <Col>
            <ThankSection/>
          </Col>
        </Row>
      </Container>
  );
}

export default Delivery;