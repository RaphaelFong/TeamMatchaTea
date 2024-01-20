import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Guess.css';
import calculateGrade from './GradeUtils';
import GradeDisplay from './GradeDisplay';
import { allRules } from './Rules.js';
import WinMessagePopup from './WinMessage'; // Import the new component




const PasswordGame = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [rules, setRules] = useState([allRules[0].message]);
  const [rulesCheck, setRulesCheck] = useState([allRules[0].check]);
  const [ruleId, setRuleId] = useState(1);
  const [gameWon, setGameWon] = useState(false);
  const [showWinPopup, setShowWinPopup] = useState(false);
  const [clearedRulesCount, setClearedRulesCount] = useState(0);
  const [finalGrade, setFinalGrade] = useState('');



  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Clear the emoji from the password after the specified delay
      setPassword((prevPassword) => prevPassword.replace('🍦', ''));
    }, 10000);

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, [password, 10000, '🍦']);

  useEffect(() => {

    if (checkAllRules(password) && ruleId < allRules.length) {
      setRuleId((prevRuleId) => prevRuleId + 1);
      setRules((prevRules) => [allRules[ruleId].message, ...prevRules]);
      setRulesCheck((prevRulesCheck) => [allRules[ruleId].check, ...prevRulesCheck]);
    }


    if (checkAllRules(password) && ruleId === allRules.length) {
      const calculatedGrade = calculateGrade();
      setFinalGrade(calculatedGrade);
      setGameWon(true);
      setShowWinPopup(true); // Show the WinPopup
      setTimeout(() => {
        setGameWon(false);
        setShowWinPopup(false); // Close the WinPopup
        setRuleId(1);
        setRules([allRules[0].message]);
        setRulesCheck([allRules[0].check]);
        setPassword('');
        navigate('/');
      }, 2000);
    }

    
    // Check if the user cleared 4 rules
    const clearedCount = rulesCheck.filter((ruleCheck) => ruleCheck(password)).length;
    setClearedRulesCount(clearedCount);

    if (clearedCount === 4) {
      // Show the Merlion image
      document.querySelector('.merlion-image').style.display = 'block';
      document.querySelector('.merlion-container').classList.add('show');
    }

    if (clearedCount === 8) {
      // Show the Merlion image
      document.querySelector('.city-image').style.display = 'block';
      document.querySelector('.city-container').classList.add('show');
    }

    if (clearedCount === 12) {
      // Show the Merlion image
      document.querySelector('.satay-image').style.display = 'block';
      document.querySelector('.satay-container').classList.add('show');
    }


  }, [password, ruleId, rulesCheck]);

  const handleReturnToMainMenu = () => {
    navigate('/');
  };

  const checkAllRules = (password) => {
    return rulesCheck.every((ruleCheck) => ruleCheck(password));
  };

  return (
    <div className="main-container">
      <div className="grade-display-container">
        <GradeDisplay handleReturnToMainMenu={handleReturnToMainMenu} />
      </div>
      <div className="merlion-container">
        <img className="merlion-image" src="merlion.png" alt="Merlion" />
      </div>
      <div className="city-container">
        <img className="city-image" src="city.png" alt="City" />
      </div>
      <div className="satay-container">
        <img className="satay-image" src="satay.png" alt="Satay" />
      </div>
      <div className="password-game-container">
        <h3>Guess the password</h3>
        <input
          className="default-input"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter your password"
          disabled={gameWon}
        />
        <div className="rules-container">
          {rules.map((rule, index) => {
            const ruleId = allRules.findIndex((r) => r.message === rule) + 1;

            return (
              <div
                key={index}
                className={`rule-container ${rulesCheck[index](password) ? 'active-rule-container' : 'inactive-rule-container'
                  }`}
              >
                <div className="rule-id-container">
                  <p className="rule-id">Rule: {ruleId}</p>
                </div>
                <p
                  key={index}
                  className={rulesCheck[index](password) ? 'active-rule' : 'inactive-rule'}
                >
                  {rule}
                </p>
              </div>
            );
          })}
        </div>
        {showWinPopup && <WinMessagePopup />}

      </div>


    </div>
  );
};

export default PasswordGame;
