import React from 'react';
import './style.css';
import SideBar from '../../components/SideBar';
import SMSForm from '../../components/SmsForm';

const Home = () => {
  return (
    <div className='App'>
      <div className='dashboard'>
        <SideBar />
        <div className='main-content'>
          <h1>SMS Campaigner</h1>
          <SMSForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
