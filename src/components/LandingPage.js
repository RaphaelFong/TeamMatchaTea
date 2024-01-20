// LandingPage.js
//import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import ConfigurePage from './ConfigurePage';
import React, {useState, useEffect} from 'react';
import userEvent from '@testing-library/user-event';

const LandingPage = () => {
  
  // Start - Stuff for the inactive 5s
  const [linkClicked, setLinkClicked] = useState(false);

  const showPopup = () => {
    alert("Click on reset password.");
  }

  // Setup event handler
  const handleLinkClick = () =>{
    setLinkClicked(true);
  }

  // Trigger popup if it has not been clicked for 5s
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
  // End - Stuff for the inactive 5s


  // Start - Stuff for the popup foreground

  const [isInstructionVisible, setInstruction] = useState(false);
  
  const toggleInstruction = () => {
    console.log('Toggle popup');
    setInstruction(!isInstructionVisible);
  };
  // End - Stuff for the popup foreground


  // This is html stuff
  return (
    <div className="landing-page-container">

      <div>
      {/* Popup container */}
      {(!isInstructionVisible &&
        <div className="overlay">
          <div className="popupInstruction">
            <p>You are a university student who is about to submit an assignment to the online school
              portal. However, you forgot your login password. You clicked on the reset password and turns out
              the IT team has an interesting way of restting password.
              But you got to hurry. Every minute passes the deadline (0000 hours), you get a letter grade down.
            </p>
            <button className="close-btn" type="button" onClick={toggleInstruction}>Close</button>
          </div>
        </div>
      )}
      </div>

      <div>
        <div className='rectangle'>
          <div className='centered-header'>
            <h1>University Education Portal</h1>

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

            <div className='divPadding'>
              <form>
                {/* 
                <div>
                <label for="username">Username:</label>
                </div>
                */}

                <div>
                <input className='inputField' type="text" id="username" name="username" placeholder="Username"></input>
                </div>

                {/* 
                <div>
                <label for="pwd">Password:</label>
                </div>
                */}

                <div className='divPadding'>
                <input className='inputField' type="password" id="pwd" name="pwd" placeholder="Password"></input>
                </div>

                <div>
                <input className='login' type="submit" value="Login"></input>
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
