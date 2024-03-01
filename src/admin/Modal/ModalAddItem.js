import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { PlusCircle } from 'react-bootstrap-icons';
import ImageUploader from '../Components/ImageUploader';
import apiUrl from '../../config';
import { useParams } from 'react-router-dom';
import './Modal.scss';

const ModalAddItem = ({ type, onSubmit }) => {
  const { categoryID } = useParams();
  const [modalAddShow, setModalAddShow] = useState(false);
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleModalAddClose = () => {
    setModalAddShow(false);
    setName('');
    setImageUrl('');
  };

  const handleModalAddShow = () => {
    setModalAddShow(true);
    setName('');
    setImageUrl('');
  };

  return (
    <div>
      <Button onClick={handleModalAddShow} className="me-2 add_button"><PlusCircle className="add_button__icons"/></Button>
      <div>
        <Modal show={modalAddShow} onHide={handleModalAddClose}>
          <Modal.Header closeButton>
            <Modal.Title>{`Додати ${type === 'category' ? 'категорію' : 'підкатегорію'}`}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className='mb-3'>
              <Form.Control
                type='text'
                placeholder={`Введіть назву ${type === 'category' ? 'категорії' : 'підкатегорії'}`}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className='mb-3 d-flex flex-column'>
              <ImageUploader imageUrl={imageUrl} setImageUrl={setImageUrl} />
            </Form.Group>
            {imageUrl && <img className="image__preview" src={`${apiUrl}${imageUrl}`} alt="Uploaded" />}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalAddClose}>
              Закрити
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                onSubmit({ name, imageUrl, categoryID });
                handleModalAddClose();
              }}
            >
              Додати
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default ModalAddItem;
