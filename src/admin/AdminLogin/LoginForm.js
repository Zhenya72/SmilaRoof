import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { EyeFill, EyeSlashFill } from 'react-bootstrap-icons';
const LoginForm = ({ login, setLogin, password, setPassword, showPassword, toggleShowPassword }) => {
  return (
    <Form className="form">
      <FloatingLabel controlId="login" label="Логін" className="mb-2 label">
        <Form.Control
          className="control"
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          placeholder="Логін"
        />
      </FloatingLabel>
      <FloatingLabel controlId="password" label="Пароль" className="mb-2 label">
        <Form.Control
          className="control"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Пароль"
        />
        <span className="password-toggle" onClick={toggleShowPassword}>
          {showPassword ? <EyeFill /> : <EyeSlashFill />}
        </span>
      </FloatingLabel>
    </Form>
  );
};

export default LoginForm;
