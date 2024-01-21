// GradeDisplay.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import calculateGrade from './GradeUtils';
import LostMessagePopup from './LostMessage';
import './GradeDisplay.css';

const GradeDisplay = ({ handleReturnToMainMenu, onTimerUpdate }) => {
  const [timer, setTimer] = useState(300); // Reduced time for testing
  const [showLostMessage, setShowLostMessage] = useState(false);
  const [finalGrade, setFinalGrade] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 0) {
          clearInterval(interval);
          const calculatedGrade = calculateGrade();
          setFinalGrade(calculatedGrade);
          setShowLostMessage(true);
          // Redirect to the landing page after 3 seconds
          setTimeout(() => {
            navigate('/');
          }, 3000);
          return 0;
        }
        return prevTimer - 1;
      });

    }, 1000);

    return () => clearInterval(interval);
  }, [navigate]);



  return (
    <div className="grade-display">
      <p>Grade: {calculateGrade(timer)}</p>
      <p>Time Remaining: {timer}s</p>
      <div className="options-container">
        <button onClick={handleReturnToMainMenu}>Return to Main Menu</button>
      </div>
      {showLostMessage && <LostMessagePopup finalGrade={finalGrade} />}

    </div>
  );
};

export default GradeDisplay;
