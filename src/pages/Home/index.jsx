import React, { useState } from 'react';
import './style.css';
import SideBar from '../../components/SideBar';
import SMSForm from '../../components/SmsForm';
import LocalStorageService from '../../utils/LocalStorageServices';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [selectedItem, setSelectedItem] = useState('SMS Campaigner');
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  const handleLogout = () => {
    LocalStorageService.clearToken();
    navigate('/login');
  };
  return (
    <div className='App'>
      <div className='dashboard'>
        <div className='sidebar-container'>
          <SideBar
            selectedItem={selectedItem}
            handleItemClick={handleItemClick}
          />
        </div>
        <div className='main-content'>
          {selectedItem === 'SMS Campaigner' && <h1>SMS Campaigner</h1>}
          {selectedItem === 'Example 1' && (
            <div className='Example1'>Example 1 Content</div>
          )}
          {selectedItem === 'Example 2' && (
            <div className='Example2'>Example 2 Content</div>
          )}
          {selectedItem === 'SMS Campaigner' && <SMSForm />}
        </div>
      </div>
      <div className='logout-container'>
        <button className='logout-button' onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
