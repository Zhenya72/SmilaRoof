import { useState } from 'react';
// import axios from 'axios';
import Loader from '../../Components/Loader/Loader';
import ErrorAlert from '../../Components/ErrorAlert/ErrorAlert';
import { PlusCircle } from 'react-bootstrap-icons';
import { Button, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ModalAddCategory = () => {
  const [modalAddShow, setModalAddShow] = useState(false);
  const [name, setName] = useState('');  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const handleModalAddClose = () => {
    setModalAddShow(false);
    setName('');
    setError(null);
  } 
  const handleModalAddShow = () => {
    setModalAddShow(true);
    setName('');
    setError(null);
  } 


  const addTeams = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
    //   await axios.post(`http://127.0.0.1:5000/add-teams`, {'tournamentId': tournamentId, 'name': name, 'country': country, 'yearOfFoundation': yearOfFoundation, 'coach': coach, 'games': 0, 'victories': 0, 'nobodys': 0, 'defeats': 0, 'goalsScored': 0, 'missedBalls': 0, 'goalDifference': 0, 'points': 0});
    //   fetchTeams();
      handleModalAddClose();
    } catch (error) {
      setError('Error:', error.message);
    } finally {
      setLoading(false);
    }
  };

    
    
  return (
    <div>
      {loading && <Loader />}
      <ErrorAlert error={error}/>
          <Button onClick={handleModalAddShow} className="me-2 add_button"><PlusCircle className="add_button__icons"/></Button>
        {/* Модальне вікно для додавання команди */}
        <div>
          <Modal show={modalAddShow} onHide={handleModalAddClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add a command</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group className='mb-3'>
                <Form.Control
                  type='text'
                  placeholder='Enter the name of the command'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleModalAddClose}>
                Закрити
              </Button>
              <Button variant="primary" onClick={addTeams}>
                Додати
              </Button>
            </Modal.Footer>
        </Modal>
      </div>
          </div>
  );
};

export default ModalAddCategory;




