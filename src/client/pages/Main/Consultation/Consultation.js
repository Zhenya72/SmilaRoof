import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Telephone } from 'react-bootstrap-icons';
import MyButton from '../../../../Components/MyButton/MyButton';
import ModalConsultation from '../../../Components/ModalConsultation/ModalConsultation';
import './Consultation.scss'
function Consultation() {
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  return (
      <section className='consultation conteiner'>
        <Container className='consultation_conteiner'>
          <p className='consultation__paragraph'>
            <span className='consultation__span'>Потрібна <br/>консультація?</span><br/>
            Телефонуй або замов консультацію
          </p>
        <address className='consultation__phone'>
          <Telephone className='icon consultation__icon' />
          <div className='consultation__phone_number'>
            <a className="link" href="tel:+380505121566">(050) 512-15-66</a>
            <a className="link" href="tel:+380635121566">(063) 512-15-66</a>
            <a className="link" href="tel:+380995121566">(099) 512-15-66</a>
          </div>
          </address>
          <MyButton onClick={handleShow}>Замовити консультацію</MyButton>
          <ModalConsultation show={showModal} onHide={handleClose} />
          </Container>
      </section>
  );
}

export default Consultation;






