// ConfigurePage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ConfigurePage.css'; // Import your custom CSS file

const ConfigurePage = () => {
  const initialRules = [
    { text: 'At least 5 characters in password', category: 'length', check: (pw) => pw.length >= 5, answer: '' },
    { text: 'There must be a digit in your password', category: 'digit', check: (pw) => /\d/.test(pw), answer: '' },
    { text: 'There must be CAPITALISED in your password', category: 'capitalised', check: (pw) => /[A-Z]/.test(pw), answer: '' },
    { text: 'The word "February" must be in your password', category: 'word', check: (pw) => pw.includes('February'), answer: '' },
    { text: 'The number "20" must be in your password', category: 'number', check: (pw) => pw.includes('20'), answer: '' },
  ];

  const ruleCategories = ['digit', 'length', 'capitalised', 'word', 'number'];
  const navigate = useNavigate();

  const [editedRules, setEditedRules] = useState([...initialRules]);

  const handleRuleChange = (index, value) => {
    const updatedRules = [...editedRules];
    updatedRules[index].text = value;
    setEditedRules(updatedRules);
  };

  const handleCategoryChange = (index, category) => {
    const updatedRules = [...editedRules];
    updatedRules[index].category = category;
    // Clear the answer when the category changes to something other than 'length', 'word', or 'number'
    if (!['length', 'word', 'number'].includes(category)) {
      updatedRules[index].answer = '';
    }
    setEditedRules(updatedRules);
  };

  const handleAnswerChange = (index, answer) => {
    const updatedRules = [...editedRules];
    updatedRules[index].answer = answer;
    setEditedRules(updatedRules);
  };

  const handleDeleteRule = (index) => {
    const updatedRules = [...editedRules];
    updatedRules.splice(index, 1);
    setEditedRules(updatedRules);
  };

  const handleDeleteAllRules = () => {
    setEditedRules([]);
  };

  const handleReset = () => {
    // Reset to the initial rules
    setEditedRules([...initialRules]);
  };

  const handleSave = () => {
    // Navigate back to the landing page with the updated rules as state
    navigate('/');
  };

  const handleAddRule = () => {
    // Add a new rule with default values
    setEditedRules([...editedRules, { text: '', category: '', check: () => true, answer: '' }]);
  };

  return (
    <div className="configure-page-container">
      <h2 className="configure-title">Configure Rules</h2>
      <form>
        {editedRules.map((rule, index) => (
          <div key={index} className="configure-rule-container">
            <label className="rule-label">
              Rule {index + 1}:
            </label>
            <select
              value={rule.category}
              onChange={(e) => handleCategoryChange(index, e.target.value)}
              className="dropdown"
            >
              {ruleCategories.map((category, categoryIndex) => (
                <option key={categoryIndex} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <input
              type="text"
              value={rule.text}
              onChange={(e) => handleRuleChange(index, e.target.value)}
              placeholder="Enter rule"
              className="input"
            />
            {/* Render the answer input only for selected categories */}
            {['length', 'word', 'number'].includes(rule.category) && (
              <input
                type="text"
                value={rule.answer}
                onChange={(e) => handleAnswerChange(index, e.target.value)}
                placeholder="Enter answer"
                className="input"
              />
            )}
            {/* Delete button for each rule */}
            <button type="button" onClick={() => handleDeleteRule(index)} className="delete-button">
              Delete Rule
            </button>
          </div>
        ))}
        {/* Delete all rules button */}
        <div className="configure-buttons">
          <button type="button" onClick={handleAddRule}>
            Add Rule
          </button>
          <button type="button" onClick={handleDeleteAllRules} className="delete-all-button">
            Delete All Rules
          </button>
          <button type="button" onClick={handleSave}>
            Save
          </button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default ConfigurePage;
