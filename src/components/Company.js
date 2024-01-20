import { getRandom } from "./getRandom";

export const companyArray = [
    {
        link: 'https://2.bp.blogspot.com/-_qkjcEMYV4A/WWtsZGD6FGI/AAAAAAAAA-0/7uAGA4Orq1smYFbRH_-439LtjNHBkVcgACLcBGAs/s1600/cover.png' ,
        com: 'ninjavan'

    },
    {
        link: 'https://logos-world.net/wp-content/uploads/2020/11/Razer-Emblem.jpg',
        com: 'razer'

    },
    {
        link: 'https://yt3.googleusercontent.com/ytc/AIf8zZQxCtz6emLb5nUpKs-3TNmIRHGjxNUN_EXE6Amq=s900-c-k-c0x00ffffff-no-rj',
        com: 'osim'

    },
    {
        link: 'https://1000logos.net/wp-content/uploads/2020/04/DBS-Logo-1968-500x306.jpg',
        com: 'dbs'

    }
    
];

export const randomCompany = getRandom(companyArray);