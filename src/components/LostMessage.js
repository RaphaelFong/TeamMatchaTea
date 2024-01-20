// LostMessagePopup.js
import React from 'react';
import './LostMessage.css';

const LostMessagePopup = ({ finalGrade }) => {
  return (
    <div className="lost-message-popup">
      <p>You lost the game! <br /> Your final grade: <span className="final-grade">{finalGrade}</span>. <br /> Redirecting to the landing page...</p>
    </div>
  );
};

export default LostMessagePopup;
