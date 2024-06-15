import React from 'react';
import './style.css';

const SideBar = ({ selectedItem, handleItemClick }) => {
  return (
    <div className='sidebar'>
      <ul>
        <li
          className={selectedItem === 'SMS Campaigner' ? 'selected' : ''}
          onClick={() => handleItemClick('SMS Campaigner')}
        >
          SMS Campaigner
        </li>
        <li
          className={selectedItem === 'Example 1' ? 'selected' : ''}
          onClick={() => handleItemClick('Example 1')}
        >
          Example 1
        </li>
        <li
          className={selectedItem === 'Example 2' ? 'selected' : ''}
          onClick={() => handleItemClick('Example 2')}
        >
          Example 2
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
