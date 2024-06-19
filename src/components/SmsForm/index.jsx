import React, { useState } from 'react';
import './style.css';
import { onSmsSend } from '../../store/message';
import { useDispatch } from 'react-redux';
import ErrorModal from '../../components/ErrorModal';

const SMSForm = () => {
  const dispatch = useDispatch();
  const [campaignName, setCampaignName] = useState('');
  const [originator, setOriginator] = useState('');
  const [recipientsInput, setRecipientsInput] = useState('');
  const [recipients, setRecipients] = useState([]);
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handleAddRecipients = () => {
    const newRecipients = recipientsInput
      .split(',')
      .map((num) => num.trim())
      .filter((num) => {
        const isValid = /^\+?[0-9]{9,13}$/.test(num);
        console.log(`Number '${num}' isValid: ${isValid}`);
        return isValid && !recipients.includes(num);
      });

    console.log('New recipients:', newRecipients);

    if (newRecipients.length === 0) {
      setError('Please enter valid 10-digit mobile numbers.');
      setShowErrorModal(true);
      return;
    }

    setRecipients([...recipients, ...newRecipients]);
    setRecipientsInput('');
  };

  const handleRemoveRecipient = (removeRecipient) => {
    setRecipients(recipients.filter((r) => r !== removeRecipient));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const values = {
      campaign_name: campaignName,
      originator: originator,
      recipients: recipients,
      content: content,
    };
    try {
      const resultAction = await dispatch(onSmsSend(values));
      if (onSmsSend.fulfilled.match(resultAction)) {
        setError('Message sent successfully');
        setShowErrorModal(true);
        resetForm();
      } else {
        setError('Error: could not complete the request');
        setShowErrorModal(true);
      }
    } catch (error) {
      console.error('Error: could not complete the request', error);
      setError('Error: could not complete the request. Please try again.');
      setShowErrorModal(true);
    }
  };
  const resetForm = () => {
    setCampaignName('');
    setOriginator('');
    setRecipients([]);
    setContent('');
  };
  const handleCloseModal = () => {
    setShowErrorModal(false);
  };

  return (
    <form className='sms-form' onSubmit={handleSubmit}>
      <div className='form-group'>
        <label>Campaign Name:</label>
        <input
          type='text'
          value={campaignName}
          onChange={(e) => setCampaignName(e.target.value)}
          required
        />
      </div>
      <div className='form-group'>
        <label>Originator:</label>
        <input
          type='text'
          value={originator}
          onChange={(e) => setOriginator(e.target.value)}
          required
        />
      </div>
      <div className='form-group'>
        <label>Recipients (comma-separated):</label>
        <input
          type='text'
          value={recipientsInput}
          placeholder='e.g., +911234567890, +920987654321'
          onChange={(e) => setRecipientsInput(e.target.value)}
        />
        <button type='button' className='button' onClick={handleAddRecipients}>
          Add Recipients
        </button>
      </div>
      <div className='form-group'>
        <label>Recipients List:</label>
        <ul>
          {recipients?.map((r, index) => (
            <li key={index}>
              {r}{' '}
              <button
                type='button'
                className='button'
                onClick={() => handleRemoveRecipient(r)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className='form-group'>
        <label>Content:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
      </div>
      <button type='submit' className='submit-button'>
        Send
      </button>
      {showErrorModal && (
        <ErrorModal message={error} onClose={handleCloseModal} />
      )}
    </form>
  );
};

export default SMSForm;
