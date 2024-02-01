import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
function Reviews() {
  return (
      <section className='conteiner'>
        <Container>
          <h3 className='subtitle'>Відгуки наших клієнтів</h3>
          <Helmet>
            <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer />
          </Helmet>
          <div className="elfsight-app-bcdbf2de-62bb-4832-90d5-237a43bd5165" data-elfsight-app-lazy></div>
        </Container>
      </section>
  );
}

export default Reviews;






