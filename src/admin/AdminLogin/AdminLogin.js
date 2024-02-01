import { useState } from 'react';
import MyButton from '../../Components/MyButton/MyButton';
import { useHistory } from 'react-router-dom';
import ErrorAlert from '../../Components/ErrorAlert/ErrorAlert';
import LoginForm from './LoginForm'
import './AdminLogin.css'
function AdminLogin() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();


  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null); 
    try {
      if (!login) {
        setError('Будь ласка, введіть логін');
        return
      }
      if (!password) {
        setError('Будь ласка, введіть пароль');
        return;
      }
      if (login === 'admin' && password === 'admin') {
        history.push('/admin/dashboard');
        setLogin('')
        setPassword('')
        setError(null);
      } else {
        setError('Невірний логін або пароль');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev); // Зміна стану для відображення/приховування пароля
  };


  return (
    <div className='admin__form'>
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

