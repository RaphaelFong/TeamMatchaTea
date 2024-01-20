// Rules.js

export const allRules = [
  {
    id: 1,
    check: (pw) => pw.length >= 5,
    message: "At least 5 characters in password",
    status: "inactive" // Initial status is inactive
  },
  {
    id: 2,
    check: (pw) => /\d/.test(pw),
    message: 'There must be a digit in your password',
    status: "inactive"
  },
  {
    id: 3,
    check: (pw) => /[A-Z]/.test(pw),
    message: 'There must be CAPITALISED in your password',
    status: "inactive"
  },
  {
    id: 4,
    check: (pw) => pw.includes('February'),
    message: 'The word "February" must be in your password',
    status: "inactive"
  },
  {
    id: 5,
    check: (pw) => pw.includes('20'),
    message: 'The number "20" must be in your password',
    status: "inactive"
  },
];