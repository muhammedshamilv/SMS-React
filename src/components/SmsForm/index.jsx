import React, { useState } from 'react';
import './style.css';

const SMSForm = () => {
  const [campaignName, setCampaignName] = useState('');
  const [originator, setOriginator] = useState('');
  const [recipients, setRecipients] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission and notification
    console.log({ campaignName, originator, recipients, content });
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
        <label>Recipients:</label>
        <input
          type='text'
          value={recipients}
          onChange={(e) => setRecipients(e.target.value)}
          required
        />
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
    </form>
  );
};

export default SMSForm;
