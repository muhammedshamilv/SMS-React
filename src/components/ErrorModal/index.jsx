import React from 'react';
import './style.css';

const ErrorModal = ({ message, onClose }) => {
  return (
    <div className='modal'>
      <div className='modal-content'>
        <span className='close' onClick={onClose}>
          &times;
        </span>
        <p className='content'>{message}</p>
      </div>
    </div>
  );
};

export default ErrorModal;
