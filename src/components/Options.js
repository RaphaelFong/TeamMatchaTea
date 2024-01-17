import React, { useState, useEffect } from 'react';
import './Options.css';

const Options = ({ handleReturnToMainMenu, handleRetry }) => {
  const [timeRemaining, setTimeRemaining] = useState(60); // Initial time in seconds
  const [timeIsUp, setTimeIsUp] = useState(false);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timerInterval); // Stop the timer when time is up
          setTimeIsUp(true); // Set the state to indicate that time is up
          // You can add additional logic here for what happens when the time is up
          return prevTime;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timerInterval); // Cleanup on component unmount
  }, []);

  const handleRetryClick = () => {
    // Reset the timer and game when the "Retry" button is clicked
    setTimeRemaining(60);
    setTimeIsUp(false);
    handleRetry(); // You can implement the logic to reset the game in the parent component
  };

  return (
    <div className="options-container">
      <button onClick={handleReturnToMainMenu}>Return to Main Menu</button>
      <div className="timer-container">
        {timeIsUp ? (
          <div>
            <p>Time's up! Additional logic can be added here.</p>
            <button onClick={handleRetryClick}>Retry</button>
          </div>
        ) : (
          <p>Time Remaining: {timeRemaining} seconds</p>
        )}
      </div>
    </div>
  );
};

export default Options;
