import * as shuffle from './Shuffle.js'
import * as location from './Location.js'


export const allRules = [
    {
      id: 1,
      check: (pw) => pw.length >= 5,
      message: 'At least 5 characters in password'
    },
    {
      id: 2,
      check: (pw) => /\d/.test(pw),
      message: 'There must be a digit in your password'
    },
    {
      id: 3,
      check: (pw) => /[A-Z]/.test(pw),
      message: 'There must be CAPITALISED in your password'
    },
    {
      id: 4,
      check: (pw) => pw.includes('February'),
      message: 'The word "February" must be in your password'
    },
    {
      id: 5,
      check: (pw) => pw.includes('20'),
      message: 'The number "20" must be in your password'
    },
    {
      id: 6,
      check: (pw) => pw.includes(location.randomLocation.place),
      message: <div> <p>This location must be in your password (no spacing and in lowercase)</p> <img class="img" src= {location.randomLocation.link} alt="Random"></img></div>
      
    },
    {
      id: 7,
      check: (pw) => pw.includes(shuffle.requiredWord),
      message: `Decipher and include this famous Singapore slang in your password: ${shuffle.shuffledWord}`
    }
    
  ];

  
