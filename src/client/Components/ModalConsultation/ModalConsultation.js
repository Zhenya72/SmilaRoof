import { useState, useEffect } from 'react';
import { Modal, Form } from 'react-bootstrap';
import MyButton from '../../../Components/MyButton/MyButton';
import Loader from '../../../Components/Loader/Loader';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import ErrorAlert from '../../../Components/ErrorAlert/ErrorAlert';
import './ModalConsultation.css'
const ModalConsultation = ({ show, onHide }) => {
  const initialFormData = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showCheckmark, setShowCheckmark] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setShowCheckmark(false);
    try {
      const serviceId = 'service_7djkdce';
      const templateId = 'template_p1bxi5m';
      const publicKey = 'cIgt7zSB7cdiEzsgg';

      if (!formData.name.trim()) {
        setError('Будь ласка, введіть ім\'я');
        return;
      }
      if (!formData.email || !validateEmail(formData.email)) {
        setError('Будь ласка, введіть коректну адресу електронної пошти');
        return
      }
      if (!formData.phone.trim()) {
        setError('Будь ласка, введіть номер телефону');
        return;
      }

      await emailjs.send(serviceId, templateId, formData, publicKey);

      setShowCheckmark(true);
      setTimeout(() => {
        onHide();
        setFormData(initialFormData);
        setShowCheckmark(false); 
      }, 2000);
    } catch (error) {
      setError(error.message || 'Проблема з сервером. Спробуйте ще раз пізніше.');
    } finally {
      setLoading(false);
    }
  };


  const handleModalClose = () => {
    setFormData(initialFormData);
    setError(null);
    setShowCheckmark(false);
    onHide();
  };

  useEffect(() => {
    return () => {
      setError(null);
      setShowCheckmark(false);
    };
  }, []);

  return (
    <Modal show={show} onHide={handleModalClose} centered>
      <Modal.Header closeButton className="border-0">
        <Modal.Title>Замовити дзвінок</Modal.Title>
      </Modal.Header>
      <Modal.Body className="border-0">
        <Form>
          <Form.Group controlId="formName" className='mb-2'>
            <Form.Label>Ім'я<span className='star'>*</span></Form.Label>
            <Form.Control
              type="text"
              placeholder="Введіть ім'я"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formEmail" className='mb-2'>
            <Form.Label>Email<span className='star'>*</span></Form.Label>
            <Form.Control
              type="email"
              placeholder="Введіть email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formPhone" className='mb-2'>
            <Form.Label>Телефон<span className='star'>*</span></Form.Label>
            <Form.Control
              type="tel"
              placeholder="Введіть номер телефону"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formMessage"  className='mb-2'>
            <Form.Label>Повідомлення</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Введіть текст повідомлення"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className="border-0 modal__footer">
       <ErrorAlert error={error} />
        <MyButton onClick={handleSubmit} className='mb-2'>
          Відправити
        </MyButton>
      </Modal.Footer>
      {loading && <Loader />}
      {showCheckmark && (
          <div className="modal__awesome_icon text-success">
            <FontAwesomeIcon className="awesome_icon" icon={faCheckCircle} size="4x" />
          </div>
        )}
    </Modal>
  );
};

export default ModalConsultation;
