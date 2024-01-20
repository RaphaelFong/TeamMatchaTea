import React from 'react';
import './WinMessage.css';

const WinMessagePopup = ({ finalGrade }) => {
  return (
    <div className="lost-message-popup">
      <p>You won the game! <br /> <br /> Redirecting to the landing page...</p>
    </div>
  );
};

export default WinMessagePopup;
