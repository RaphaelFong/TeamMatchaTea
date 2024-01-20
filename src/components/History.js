import { getRandom } from "./getRandom";

export const historyArray = [
    {
        qn: "Singapore's declaration of independence",
        ans: '1965'
    },
    {
        qn: "Singapore's 50th birthday",
        ans: '2015'
    },
    {
        qn: "Opening of Singapore Changi Airport",
        ans: '1981'
    }
];

export const randomHistory = getRandom(historyArray);