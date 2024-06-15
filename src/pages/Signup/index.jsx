import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const navigate = useNavigate();
  const handleSignupClick = () => {
    navigate('/Login');
  };
  return (
    <div className='container'>
      <form className='form'>
        <h2>Register</h2>
        <div className='form-group'>
          <input type='email' placeholder='Email' required />
        </div>
        <div className='form-group'>
          <input type='password' placeholder='Password' required />
        </div>
        <button type='submit' className='submit-button'>
          Register
        </button>
        <button
          type='button'
          className='submit-button'
          onClick={handleSignupClick}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
