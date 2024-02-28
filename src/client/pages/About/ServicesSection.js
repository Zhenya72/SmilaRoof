import { Container } from 'react-bootstrap';
function ServicesSection() {
    return (
        <section className='services'>
          <Container> 
            <p>
              Наші послуги:
            </p>
            <ul>
              <li>Продаж та доставка будівельних матеріалів.</li>
              <li>Консультації з вибору оптимальних рішень для вашого проекту.</li>
              <li>Постачання професійних інструментів та обладнання.</li>
            </ul>
            <p>
              Ми прагнемо створювати простір, де будівельники та майстри можуть знайти все необхідне для реалізації своїх ідей. "Все для даху" - це не тільки магазин, але й ваш надійний партнер у будівельних подорожах. Довірте свій проект нам, і ми зробимо все можливе, щоб зробити його успішним!
            </p>
            <p>
              Обирайте якість та надійність разом із "Все для даху"!
            </p>
          </Container>
        </section>
  );
}

export default ServicesSection;