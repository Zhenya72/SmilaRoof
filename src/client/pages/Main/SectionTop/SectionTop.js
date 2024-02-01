import { useState } from 'react';
import { Container, Carousel } from 'react-bootstrap';
import MyButton from '../../../../Components/MyButton/MyButton';
import ModalConsultation from '../../../Components/ModalConsultation/ModalConsultation';
import slide1 from '../../../../img/headSlider/slide1.jpg';
import slide2 from '../../../../img/headSlider/slide2.jpg';
import slide3 from '../../../../img/headSlider/slide3.jpg';
import slide4 from '../../../../img/headSlider/slide4.jpg';
import './SectionTop.css'
function SectionTop() {
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  return (
    <>
      <section className='sectionTop'>
        <Carousel
          controls={false}
          indicators={false}
          fade={true}
          pause={false}
          interval={2000}
          className="carousel-container">
          <Carousel.Item className='carousel-item' style={{ backgroundImage: `url(${slide1})` }}>
            <div className="overlay"></div>
          </Carousel.Item>
          <Carousel.Item className='carousel-item' style={{ backgroundImage: `url(${slide2})` }}>
            <div className="overlay"></div>
          </Carousel.Item>
          <Carousel.Item className='carousel-item' style={{ backgroundImage: `url(${slide3})` }}>
            <div className="overlay"></div>
          </Carousel.Item>
          <Carousel.Item className='carousel-item' style={{ backgroundImage: `url(${slide4})` }}>
            <div className="overlay"></div>
          </Carousel.Item>
        </Carousel>
        <Container className='sectionTop__conteiner'>
          <p className='sectionTop__paragraph_one'>Магазин покрівельних матеріалів</p>
          <h1 className='sectionTop_title'>Все для даху</h1>
          <MyButton onClick={handleShow}>Замовити консультацію</MyButton>
          <ModalConsultation show={showModal} onHide={handleClose} />
          <p className='sectionTop__paragraph_two'>
            Запишись та отримай <br/> безкоштовну консультацію
          </p>
        </Container>
      </section>
    </>
  );
}

export default SectionTop;






