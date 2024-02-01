import React from 'react';
import { Container } from 'react-bootstrap';
import './Admin.css'
import ModalAddCategory from './Modal/ModalAddCategory'
function Admin() {

  return (
    <Container className='conteiner'>
      <h1 className='title'>Категорії</h1>
      <ModalAddCategory/>
    </Container>
  );
}

export default Admin;

