import { useState } from 'react';
import axios from 'axios';
import Loader from '../../Components/Loader/Loader';
import { PlusCircle } from 'react-bootstrap-icons';
import { Button, Modal, Form } from 'react-bootstrap';
import ImageUploader from '../Components/ImageUploader';
import apiUrl from '../../config'
import ErrorAlert from '../../Components/ErrorAlert/ErrorAlert';
import './Modal.scss'

const ModalAddCategory = (props) => {
  const [modalAddShow, setModalAddShow] = useState(false);
  const [name, setName] = useState('');  
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  
  const handleModalAddClose = () => {
    setModalAddShow(false);
    setName('');
    setImageUrl('');
  } 
  const handleModalAddShow = () => {
    setModalAddShow(true);
    setName('');
    setImageUrl('');
  } 

  const FetchAddCategory = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await axios.post(`${apiUrl}/categories`, {'name': name, 'imageUrl': imageUrl});
      props.fetchCategory();
      handleModalAddClose();
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message);
      } else if (err.request) {
        setError('Помилка: неможливо встановити зв\'язок з сервером.');
      } else {
        setError('Помилка додавання категорії');
      }
    } finally {
      setLoading(false);
    }
  };
    
    
  return (
    <div>
      {loading && <Loader />}
          <Button onClick={handleModalAddShow} className="me-2 add_button"><PlusCircle className="add_button__icons"/></Button>
        <div>
          <Modal show={modalAddShow} onHide={handleModalAddClose}>
            <Modal.Header closeButton>
              <Modal.Title>Додати категорію</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group className='mb-3'>
                <Form.Control
                  type='text'
                  placeholder='Введіть назву категорії'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className='mb-3 d-flex flex-column'>
                <ImageUploader imageUrl={imageUrl} setImageUrl={setImageUrl} />
              </Form.Group>
              {imageUrl && (
                <img className="image__preview" src={`${apiUrl}${imageUrl}`} alt="Uploaded" />
              )}
            </Modal.Body>
            <Modal.Footer>
              <ErrorAlert error={error} />
              <Button variant="secondary" onClick={handleModalAddClose}>
                Закрити
              </Button>
              <Button variant="primary" onClick={FetchAddCategory}>
                Додати
              </Button>
            </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default ModalAddCategory;




