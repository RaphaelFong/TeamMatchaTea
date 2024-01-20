import React, { useState, useEffect } from 'react';
import './GradeDisplay.css';

const GradeDisplay = () => {
  const [timer, setTimer] = useState(300); // Initial time in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 0) {
          clearInterval(interval); // Stop the timer when time is up
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000); // Update every 1 second

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const calculateGrade = () => {
    const minutes = Math.floor(timer / 60);
    // Adjust the grade based on the remaining minutes
    if (minutes >= 4) {
      return 'A';
    } else if (minutes >= 3) {
      return 'B';
    } else if (minutes >= 2) {
      return 'C';
    } else if (minutes >= 1) {
      return 'D';
    } else if (minutes > 0) {
      return 'E';
    } else {
      return 'F';
    }
  };

  return (
    <div className="grade-display">
      <p>Grade: {calculateGrade()}</p>
      <p>Time Remaining: {timer} seconds</p>
    </div>
  );
};

export default GradeDisplay;
