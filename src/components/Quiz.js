export const quizArray = [

    {
        quiz: "What is the name of one of the sponsers for Hack n Roll 2024?",
        ans: ['tiktok', 'stengineering', 'optiver', 'mastercard', 'ahrefs' ]
    },
    

];

export const getRandomQuiz = (locationArray) => {
    const randomIndex = Math.floor(Math.random() * locationArray.length);
    return locationArray[randomIndex];
  };

export const randomQuiz = getRandomQuiz(quizArray);


