// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import ConfigurePage from './ConfigurePage';

const LandingPage = () => {

  return (
    <div className="landing-page-container">
      <h1>Welcome to the Password Game!</h1>
      <Link to="/play">
        <button>Play Game</button>
      </Link>
      <Link to="/configure">
        <button>Configure Rules</button>
      </Link>
  
    </div>
  );
};

export default LandingPage;
