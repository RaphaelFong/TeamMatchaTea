import { getRandom } from "./getRandom";

export const quizArray = [

    {
        quiz: "What is the name of one of the GOLD sponsers for Hack n Roll 2024?",
        ans: ['tiktok', 'stengineering',  'mastercard', 'ahrefs' , 'singtel']
    },
    {
        quiz: "What is the name of the PLATINUM sponser for Hack n Roll 2024?",
        ans: ['optiver']
    },
    {
        quiz: "What is the name of one of the SILVER sponsers for Hack n Roll 2024?",
        ans: ['marshallwace', 'citadel', 'govtech', 'dso', 'janestreet', 'foodpanda']
    },
    {
        quiz: "What is the name of one of the BRONZE sponsers for Hack n Roll 2024?",
        ans: ['stripe','palantir']
    },
    
    

];


export const randomQuiz = getRandom(quizArray);


