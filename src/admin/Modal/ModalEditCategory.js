import { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../../Components/Loader/Loader';
import { Button, Modal, Form } from 'react-bootstrap';
import ImageUploader from '../Components/ImageUploader';
import apiUrl from '../../config'
import ErrorAlert from '../../Components/ErrorAlert/ErrorAlert';
import './Modal.scss'

const ModalEditCategory = (props) => {
  const [name, setName] = useState('');  
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    if (props.name !== undefined) {
    setName(props.name);
  }
  if (props.imageUrl !== undefined) {
    setImageUrl(props.imageUrl);
  }
  }, [props.name, props.imageUrl]);

  const FetchEditCategory = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await axios.put(`${apiUrl}/categories/${props.id}`, {name, imageUrl});
      props.fetchCategory();
      props.handleElitCloseModal();
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message);
      } else if (err.request) {
        setError('Помилка: неможливо встановити зв\'язок з сервером.');
      } else {
        setError('Помилка редагування категорії');
      }
    } finally {
      setLoading(false);
    }
  };
    
  return (
    <div>
      {loading && <Loader />}
          <Modal show={props.modalEditShow} onHide={props.handleElitCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>Редагувати категорію</Modal.Title>
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
              <Button variant="secondary" onClick={props.handleElitCloseModal}>
                Закрити
              </Button>
              <Button variant="primary" onClick={FetchEditCategory}>
                Обновити
              </Button>
            </Modal.Footer>
        </Modal>
    </div>
  );
};

export default ModalEditCategory;




