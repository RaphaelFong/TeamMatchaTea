// PasswordGame.js

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Guess.css';
import Options from './Options';
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

  const handleReturnToMainMenu = () => {
    navigate('/');
  };

  const handleRetry = () => {
    setGameWon(false);
    setRuleId(1);
    setRules([allRules[0].message]);
    setRulesCheck([allRules[0].check]);
    setPassword('');
  };

  const checkAllRules = (password) => {
    return rulesCheck.every((ruleCheck) => ruleCheck(password));
  };

  return (
    <div className="main-container">
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
      <div className="options-container">
        <Options handleReturnToMainMenu={handleReturnToMainMenu} handleRetry={handleRetry} />
      </div>
    </div>
  );
};

export default PasswordGame;
