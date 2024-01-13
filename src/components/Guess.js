import React, { useState, useEffect } from 'react';
import './Guess.css';

const PasswordGame = () => {
  const [password, setPassword] = useState('');
  const [rules, setRules] = useState([
    'At least 5 characters in password',
    'There must be a digit in your password',
    'There must be CAPITALISED in your password',
    'The word "February" must be in your password',
    'The number "20" must be in your password',
  ]);
  const [activeRules, setActiveRules] = useState([]);
  const [gameWon, setGameWon] = useState(false);

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    // Check if each rule is met
    setActiveRules(rules.map((rule, index) => checkRule(newPassword, index)));
    
    // Check if all rules are met
    if (checkAllRules(newPassword)) {
      // Set game as won
      setGameWon(true);
      setTimeout(() => {
        // Reset the game after a delay
        setGameWon(false);
        setActiveRules([]);
        setPassword('');
        setActiveRules([0]); // Reactivate all rules
      }, 2000);
    }
  };

  const checkAllRules = (password) => {
    const ruleCheckFunctions = [
      (pw) => pw.length >= 5,
      (pw) => /\d/.test(pw), // At least one digit
      (pw) => /[A-Z]/.test(pw), // At least one capital letter
      (pw) => pw.includes('February'),
      (pw) => pw.includes('20'), // Check "20" only if it's the active rule
    ];

    return ruleCheckFunctions.every((ruleCheck) => ruleCheck(password));
  };

  const checkRule = (password, ruleIndex) => {
    if (activeRules.length === rules.length) {
      const ruleCheckFunctions = [
        (pw) => pw.length >= 5,
        (pw) => /\d/.test(pw), // At least one digit
        (pw) => /[A-Z]/.test(pw), // At least one capital letter
        (pw) => pw.includes('April'),
        (pw) => pw.includes('88'), // Check "20" only if it's the active rule
      ];
  
      return ruleCheckFunctions[ruleIndex](password);
    }
    return false; // No active rules, so return false
  };
  
  
  useEffect(() => {
    // Activate only the first rule on component mount
    setActiveRules([0]);
  }, []);
  

  return (
    <div className="password-game-container">
      <h3>Guess the password</h3>
      <input
        className='input'
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
  );
};

export default PasswordGame;
