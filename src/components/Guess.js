import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Guess.css';
import Options from './Options';
import { allRules } from './Rules.js';

const PasswordGame = () => {
  const navigate = useNavigate();
  //To change password
  const [password, setPassword] = useState('');
  //To change rule message
  const [rules, setRules] = useState([allRules[0].message]);
  //To change rule conditions
  const [rulesCheck, setRulesCheck] = useState([allRules[0].check]);
  //To change rule number
  const [ruleId, setRuleId] = useState(1);
  const [activeRules, setActiveRules] = useState([]);
  const [gameWon, setGameWon] = useState(false);

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    // Check if each rule is met
    setActiveRules(rules.map((rule, index) => checkRule(newPassword, index)));

    //Check if current rule is met. If it is, append next rule
    if (checkAllRules(newPassword) && ruleId < allRules.length) {
        setRuleId(prevRuleId => {return prevRuleId + 1});
        setRules(prevRules => {return [...prevRules, allRules[ruleId].message]});
        setRulesCheck(prevRulesCheck => {return [...prevRulesCheck, allRules[ruleId].check]});
    }
    // Check if all rules are met
    if (checkAllRules(newPassword) && ruleId === allRules.length) {
      // Set game as won
      setGameWon(true);
      setTimeout(() => {
        // Reset the game after a delay
        setGameWon(false);
        setRuleId(1);
        setRules([allRules[0].message]);
        setRulesCheck([allRules[0].check]);
        setActiveRules([]);
        setPassword('');
        setActiveRules([0]); // Reactivate all rules
      }, 2000);
    }
  };

  const checkAllRules = (password) => {
    return rulesCheck.every((ruleCheck) => ruleCheck(password));
  };

  const checkRule = (password, ruleIndex) => {
    if (activeRules.length === rules.length) {
      return rulesCheck[ruleIndex](password);
    }
    return false; // No active rules, so return false
  };

  useEffect(() => {
    // Activate only the first rule on component mount
    setActiveRules([0]);
  }, []);

  const handleReturnToMainMenu = () => {
    // Navigate back to the root ("/")
    navigate('/');
  };

  const handleRetry = () => {
    // You should implement the logic to reset the game state here
    setTimeout(() => {
      // Reset the game after a delay
      setGameWon(false);
      setRuleId(1);
      setRules([allRules[0].message]);
      setRulesCheck([allRules[0].check]);
      setActiveRules([]);
      setPassword('');
      setActiveRules([0]); // Reactivate all rules
    }, 2000);
  };

  return (
    <div className="main-container">
      <div className="password-game-container">
        <h3>Guess the password</h3>
        <input
          className = "default-input"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter your password"
          disabled={gameWon}
        />
        <div className="rules-container">
          {rules.map((rule, index) => (
            <div key={index} className={`rule-container ${activeRules[index] ? 'active-rule-container' : ''}`}>
              <p key={index} className={activeRules[index] ? 'active-rule' : 'inactive-rule'}>
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
