import React, { useState, useEffect } from 'react';
import './Options.css';

const Options = ({ handleReturnToMainMenu, handleRetry }) => {

  return (
    <div className="options-container">
      <button onClick={handleReturnToMainMenu}>Return to Main Menu</button>
      
    </div>
  );
};

export default Options;
