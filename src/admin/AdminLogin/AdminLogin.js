import { useState, useEffect } from 'react';
import MyButton from '../../Components/MyButton/MyButton';
import { useNavigate } from 'react-router-dom';
import ErrorAlert from '../../Components/ErrorAlert/ErrorAlert';
import LoginForm from './LoginForm'
import { useAuth } from '../../Context/AuthContext'
import axios from 'axios';
import Loader from '../../Components/Loader/Loader';
import apiUrl from '../../config'
import './AdminLogin.scss'
function AdminLogin() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const { loginIn, authenticated } = useAuth();
  
  useEffect(() => {
    if (authenticated) {
      navigate('/admin/dashboard');
    }
  }, [authenticated, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null); 
    setLoading(true);
    try {
      if (!login || !password) {
        setError('Будь ласка, введіть логін та пароль');
        return;
      }
      const response = await axios.post(`${apiUrl}/admin`, { login, password });
      const { token } = response.data;
      loginIn(token);
      setLogin('');
      setPassword('');
      navigate('/admin/dashboard');
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message);
      } else if (err.request) {
        setError('Помилка: неможливо встановити зв\'язок з сервером.');
      } else {
        setError('Виникла помилка при вході. Спробуйте ще раз.');
      }
    } finally {
      setLoading(false);
    }
  };

  
  
  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev); // Зміна стану для відображення/приховування пароля
  };


  return (
    <div className='admin__form'>
      {loading && <Loader />}
      <LoginForm
        login={login}
        setLogin={setLogin}
        password={password}
        setPassword={setPassword}
        showPassword={showPassword}
        toggleShowPassword={toggleShowPassword}
      />
        
        <ErrorAlert error={error} />
        <MyButton className='button' onClick={handleLogin}>Вхід</MyButton>
    </div>
  );
}

export default AdminLogin;

