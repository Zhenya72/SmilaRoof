import React from 'react';
import { Alert } from 'react-bootstrap';

const ErrorAlert = ({ error }) => {
  return error ? <Alert variant="danger">{error}</Alert> : null;
};

export default ErrorAlert;


