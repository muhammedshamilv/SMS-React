import React, { useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { onLogin } from '../../store/user';
import { routes } from '../../router';
import ErrorModal from '../../components/ErrorModal';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handleSignupClick = () => {
    navigate('/signup');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const values = { email, password };
    try {
      const resultAction = await dispatch(onLogin(values));
      if (onLogin.fulfilled.match(resultAction)) {
        navigate(routes.home);
      } else {
        setError('Invalid Credentials');
        setShowErrorModal(true);
      }
    } catch (error) {
      console.error('Login failed', error);
      setError('Login failed. Please try again.');
      setShowErrorModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowErrorModal(false);
  };

  return (
    <div className='container'>
      <form className='form' onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type='submit' className='submit-button'>
          Login
        </button>
        <button
          type='button'
          className='submit-button'
          onClick={handleSignupClick}
        >
          Sign Up
        </button>
      </form>
      {showErrorModal && (
        <ErrorModal message={error} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default LoginForm;
