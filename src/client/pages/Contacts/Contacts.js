import { Container } from 'react-bootstrap';
import Address from './Address'
import WorkingHours from './WorkingHours'
import Map from './Map'
import './Contacts.css';

function Contacts() {
    return (
      <Container className='conteiner'>        
            <h2 className="title">Контакти</h2>
            <div className='contacts'>  
              <div className='contacts__info'>  
                <Address/>
                <WorkingHours/>
              </div>            
              <Map/>
            </div>
        </Container>
    );
}

export default Contacts;
