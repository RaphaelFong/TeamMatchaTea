import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Guess.css';
import GradeDisplay from './GradeDisplay';
import { allRules } from './Rules.js';

const PasswordGame = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [rules, setRules] = useState([allRules[0].message]);
  const [rulesCheck, setRulesCheck] = useState([allRules[0].check]);
  const [ruleId, setRuleId] = useState(1);
  const [gameWon, setGameWon] = useState(false);

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  };

  useEffect(() => {
    if (checkAllRules(password) && ruleId < allRules.length) {
      setRuleId((prevRuleId) => prevRuleId + 1);
      setRules((prevRules) => [allRules[ruleId].message, ...prevRules]);
      setRulesCheck((prevRulesCheck) => [allRules[ruleId].check, ...prevRulesCheck]);
    }

    if (checkAllRules(password) && ruleId === allRules.length) {
      setGameWon(true);
      setTimeout(() => {
        setGameWon(false);
        setRuleId(1);
        setRules([allRules[0].message]);
        setRulesCheck([allRules[0].check]);
        setPassword('');
      }, 2000);
    }

  }, [password, ruleId]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Clear the emoji from the password after the specified delay
      setPassword((prevPassword) => prevPassword.replace('🍦', ''));
    }, 10000);

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, [password, 10000, '🍦']);

  

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
          {rules.map((rule, index) => (
            <div
              key={index}
              className={`rule-container ${
                rulesCheck[index](password) ? 'active-rule-container' : 'inactive-rule-container'
              }`}
            >
              <p key={index} className={rulesCheck[index](password) ? 'active-rule' : 'inactive-rule'}>
                {rule}
              </p>
            </div>
          ))}
        </div>
        {gameWon && <p className="win-message">Congratulations! You won the game!</p>}
      </div>
     
      
    </div>
  );
};

export default PasswordGame;
