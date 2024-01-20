// LandingPage.js
//import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import ConfigurePage from './ConfigurePage';
import React, {useState, useEffect} from 'react';
import userEvent from '@testing-library/user-event';

const LandingPage = () => {
  
  // Stuff for the inactive 10s
  const [linkClicked, setLinkClicked] = useState(false);

  const showPopup = () => {
    alert("Click on reset password.");
  }

  // Setup event handler
  const handleLinkClick = () =>{
    setLinkClicked(true);
  }

  // Trigger popup if it has not been clicked for 10s
  useEffect(() => {
    const popupTimeout = setTimeout(() => {
      if (!linkClicked)
      {
        showPopup();
      }
    }, 5000);

    // Cleanup
    return () => clearTimeout(popupTimeout);
  }, [linkClicked]);


  // This is html stuff
  return (
    <div className="landing-page-container">

      <div>
        <div className='rectangle'>
          <div className='centered-header'>
            <h1>My University Education Portal</h1>

            {/* 
            <div>
            <Link to="/play">
              <button>Play Game</button>
            </Link>
            </div>

            <div>
            <Link to="/configure">
              <button>Configure Rules</button>
            </Link>
            </div>
            */}

            <div>
              <form>
                <div>
                <label for="username">Username:</label>
                </div>

                <div>
                <input type="text" id="username" name="username"></input>
                </div>

                <div>
                <label for="pwd">Password:</label>
                </div>

                <div>
                <input type="password" id="pwd" name="pwd"></input>
                </div>

                <div>
                <input type="submit" value="Submit"></input>
                </div>
              </form>
            </div>

            <div>
            <Link to="/play" href="#" onClick={handleLinkClick} >
              <p>Forgotten your password? Click here to reset</p>
            </Link>
            </div>

            <div>

              
            </div>


            </div>
          </div>
        </div>
      </div>
  );
};

export default LandingPage;
