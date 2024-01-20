import { getRandom } from "./getRandom";

const locationsArray = [
    {
        link: "https://a.cdn-hotels.com/gdcs/production38/d1169/a9c2bb3e-9a16-49ce-820e-dbe3b0e6f0a1.jpg ",
        place: 'sunteccity'
     
    },
    {
        link:   "https://media.istockphoto.com/id/472730696/photo/sentosa-island-3.jpg?s=612x612&w=0&k=20&c=7IwqxsHDTbcHJozy4jWNQonHwAkMNPBj44ZeEykJ1hE=",
        place: 'sentosa'
     
    },
    {
        link:   "https://www.istana.gov.sg/-/media/Istana/Home/Visit-And-Explore/hm_openhouse.ashx",
        place: 'istana'
     
    },
    {
        link:  "https://i.pinimg.com/originals/39/c0/33/39c03391faf990d01af951d1baa24e19.jpg",
        place: 'chinatown'
     
    },
    {
        link: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/297611078.jpg?k=e26cc333800386469e170cfec12cc5cc261812df76497422688608b41d30f7f3&o=&hp=1",
        place: 'marinabaysands'
    }
   
];



export const randomLocation = getRandom(locationsArray);



