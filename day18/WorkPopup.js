// WorkPopup.js
import React from 'react';
import './WorkPopup.css';

function WorkPopup({ work, onClose }) {
  return (
    <div className="work-popup">
      <div className="work-popup-content">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        <h2>{work.title}</h2>
        <p>{work.description}</p>
        <img src={work.imageUrl} alt={work.title} />
      </div>
    </div>
  );
}

export default WorkPopup;
