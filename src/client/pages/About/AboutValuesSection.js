import { Container, Card, CardGroup } from 'react-bootstrap';
function AboutValuesSection() {
    return (
        <section className='about__values'>
          <Container> 
              <h3 className="subtitle">Наші цінності</h3>
              <CardGroup className='about__cards'>
                <Card style={{ border: '0' }}>
                  <Card.Body className='about__card'>
                    <Card.Title>Якість без компромісів</Card.Title>
                    <Card.Text>
                      Ми обираємо тільки високоякісні матеріали від найповажніших виробників, щоб забезпечити надійність та тривалість вашої покрівлі
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ border: '0' }}>
                  <Card.Body className='about__card'>
                    <Card.Title>Широкий вибір продукції</Card.Title>
                    <Card.Text>
                      У нас ви знайдете все необхідне для будь-якого проекту - від металочерепиці та бітумних матеріалів до професійних інструментів
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ border: '0' }}>
                  <Card.Body className='about__card'>
                    <Card.Title>Експертна консультація</Card.Title>
                    <Card.Text>
                      Наші фахівці готові допомогти вам кожним кроком. Ви можете розраховувати на наші знання та досвід
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardGroup>
          </Container>
        </section>
  );
}

export default AboutValuesSection;