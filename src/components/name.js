import { getRandom } from "./getRandom";

export const nameArray = [
    {
        link: 'https://static1.straitstimes.com.sg/s3fs-public/styles/large30x20/public/articles/2020/07/21/nz_jjlin_210739.jpg?VersionId=bLM9Zgs55QKX4O__Nz4ZXbPz.U6H0k8K',
        ans: 'jjlin'
    },
    {
        link: 'https://dwvyw8kf1avne.cloudfront.net/s3fs-public/articles/MCI_Photo_01.jpg',
        ans: 'leehsienloong'
    },
    
];

export const randomName = getRandom(nameArray);