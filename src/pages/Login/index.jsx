import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
const LoginForm = () => {
  const navigate = useNavigate();
  const handleSignupClick = () => {
    navigate('/signup');
  };
  return (
    <div className='container'>
      <form className='form'>
        <h2>Login</h2>
        <div className='form-group'>
          <input type='email' placeholder='Email' required />
        </div>
        <div className='form-group'>
          <input type='password' placeholder='Password' required />
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
    </div>
  );
};

export default LoginForm;
