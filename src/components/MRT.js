import { getRandom } from "./getRandom";

const mrtArray = [
    {
        station: 'admiralty',
        code: 'NS10'
    },
    {
        station: 'simei' ,
        code: 'EW3'
    },
    {
        station: 'bishan',
        code: 'NS17'
    },
    {
        station: 'rochor',
        code: 'DT13'
    },
    {
        station: 'dakota',
        code: 'CC8'
    },
    {
        station: 'harbourfront',
        code: 'NE1'
    },
    {
        station: 'clementi',
        code: 'EW23'
    },
    {
        station: 'stevens',
        code: 'TE11'
    },
    {
        station: 'expo',
        code: 'CG1'
    },
    {
        station: 'serangoon',
        code: 'NE12'
    },
    {
        station: 'redhill',
        code: 'EW18'
    },
];

export const randomMRT = getRandom(mrtArray);