import * as shuffle from './Shuffle.js'
import * as location from './Location.js'
import * as quiz from './Quiz.js'


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
      check: (pw) => {
        const months = ['january', 'feburary', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
        for (const month of months) {
          if (pw.includes(month)) {
            return true;
          }
        }
      },
      message: 'Your password must include a month of the year (in lowercases)'
    },
    {
      id: 5,
      check: (pw) => {
        const currYear = new Date().getFullYear();

        return pw.includes(currYear.toString());
      },
      message: 'Your password must include the current year'
    },
    {
      id: 6,
      check: (pw) => {
        for (const answers of quiz.randomQuiz.ans) {
          if (pw.includes(answers)) {
            return true;
          }
        }
      },
      message: `Quiz Time! Include the answer (without space or lowercase) to the following quiz in your password: ${quiz.randomQuiz.quiz}`
    },
    {
      id: 7,
      check: (pw) => pw.includes(location.randomLocation.place),
      message: <div> <p>This location must be in your password (no spacing and in lowercase)</p> <img class="img" src= {location.randomLocation.link} alt="Random"></img></div>
      
    },
    {
      id: 8,
      check: (pw) => pw.includes(shuffle.requiredWord),
      message: `Decipher and include this famous Singapore slang in your password: ${shuffle.shuffledWord}`
    },
    {
      id: 9,
      check: (pw) => {
        if (pw.includes(`${pw.length}`)) {
          return true;
        }
      },
      message: 'Your password must include the length of your password'
    }
    
  ];

  
