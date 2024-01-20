import * as shuffle from './Shuffle.js'
import * as location from './Location.js'
import * as quiz from './Quiz.js'
import * as company from './Company.js'
import * as mrt from './MRT.js'
import * as history from './History.js'
import * as name from './name.js'
import { uppercase } from './uppercase.js'


export const allRules = [
    {
      //length 5
      id: 1,
      check: (pw) => pw.length >= 5,
      message: 'There must be at least 5 letters in your password'
    },
    {
      //digit
      id: 2,
      check: (pw) => /\d/.test(pw),
      message: 'There must be a digit in your password'
    },
    {
      //caps
      id: 3,
      check: (pw) => /[A-Z]/.test(pw),
      message: 'Your password must be CAPITALISED'
    },
    {
      //month
      id: 4,
      check: (pw) => {
        const months = ['january', 'feburary', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
        for (const month of months) {
          if (pw.includes(month) || pw.includes(uppercase(month))) {
            return true;
          }
        }
      },
      message: 'Your password must include a month of the year'
    },
    {
      //curr year
      id: 5,
      check: (pw) => {
        const currYear = new Date().getFullYear();

        return pw.includes(currYear.toString());
      },
      message: 'Your password must include the current year'
    },
    {
      //quiz
      id: 6,
      check: (pw) => {
        for (const answers of quiz.randomQuiz.ans) {
          if (pw.includes(answers) || (pw.includes(uppercase(answers)))) {
            return true;
          }
        }
      },
      message: `Include the answer (without spacing) to the following question in your password: ${quiz.randomQuiz.quiz}`
    },
    {
      //location present
      id: 7,
      check: (pw) => {if (pw.includes(location.randomLocation.place) || pw.includes(uppercase(location.randomLocation.place))) {
        return true;
      }},
      message: <div> <p>This location in Singapore must be in your password (without spacing)</p> <img class="img" src= {location.randomLocation.link} alt="Random"></img></div>
      
    },
    {
      //shuffle word
      id: 8,
      check: (pw) => pw.includes(shuffle.requiredWord),
      message: `Decipher and include this famous Singapore slang in your password: ${shuffle.shuffledWord}`
    },
    {
      //eating emoji
      id: 9,
      check: (pw) => pw.includes('🍦'),
      message: 'Snack Time! Your password is hungry for 🍦. But be warn, it eats one every 10 seconds'
    },
    {
      //random singapore company
      id: 10,
      check: (pw) => {if (pw.includes(company.randomCompany.com) || pw.includes(uppercase(company.randomCompany.com))) {
        return true;
      }},
      message: <div> <p>Your password must include this Singaporean company(without spacing)</p> <img class="img" src= {company.randomCompany.link} alt="RandomCompany"></img></div>
    },
    {
      //year of singapore event
      id: 11,
      check: (pw) => pw.includes(history.randomHistory.ans),
      message: `Your password is feeling nostalgic, include the year that this event happened: ${history.randomHistory.qn}`


    },
    { 
      //even number
      id: 12,
      check: (pw) => {
        const digitSum =  pw.split('').filter(char => /\d/.test(char)).reduce((sum, digit) => sum + parseInt(digit, 10), 0);
        return digitSum % 2 === 0;
      },
      message: 'The sum of the digits in your password must be even'

    },
    {
      //random mrt station
      id: 13,
      check:(pw) => {if (pw.includes(mrt.randomMRT.station) || pw.includes(uppercase(mrt.randomMRT.station))) {
        return true;
      }},
      message: `🚉 Your password wants to visit the MRT station with the station code ${mrt.randomMRT.code}`

    },
    {
      //current password length
      id: 14,
      check: (pw) => {
        if (pw.includes(`${pw.length}`)) {
          return true;
        }
      },
      message: 'Your password must include the length of your password'
    },
    { 
      //random sg celeb
      id: 15,
      check: (pw) => {if (pw.includes(name.randomName.ans) || pw.includes(uppercase(name.randomName.ans))) {
        return true;
      }},
      message: <div> <p>Your password wants to know: Who is this Singaporean? (without spacing)</p> <img class="img" src= {name.randomName.link} alt="RandomName"></img></div>
    }
    
    
  ];

  
