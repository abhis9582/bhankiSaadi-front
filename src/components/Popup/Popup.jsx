// Popup.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Popup.css'; // Import the CSS file for styling

const Popup = ({ isOpen, closePopup }) => {
  return isOpen ? (
    <div className="popup-container">
      <div className="popup-content">
        <Link to="/login" onClick={closePopup}>Login</Link>
        <Link to="/register" onClick={closePopup}>Register</Link>
      </div>
    </div>
  ) : null;
};

export default Popup;
