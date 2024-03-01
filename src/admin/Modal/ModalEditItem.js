import React, { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import ImageUploader from '../Components/ImageUploader';
import apiUrl from '../../config';
import './Modal.scss'

const ModalEditItem = ({ modalEditShow, id, type, initialName, initialImageUrl, handleEditCloseModal, onSubmit }) => {
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    setName(initialName || '');
    setImageUrl(initialImageUrl || '');
  }, [initialName, initialImageUrl]);

  return (
    <div>
      <Modal show={modalEditShow} onHide={handleEditCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{`Редагувати ${type === 'category' ? 'категорію' : 'підкатегорію'}`}</Modal.Title>
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
          {imageUrl && (
            <img className="image__preview" src={`${apiUrl}${imageUrl}`} alt="Uploaded" />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditCloseModal}>
            Закрити
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              onSubmit({ id, name, imageUrl });
              handleEditCloseModal();
            }}
          >
            Обновити
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalEditItem;
