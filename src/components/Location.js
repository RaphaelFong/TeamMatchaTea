const locationsArray = [
    {
        link: "https://img.emg-services.net/institutes/institute40830/nus-banner-1.png ",
        place: 'nus'
     
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
     
    }
   
];

export const getRandomLocation = (locationArray) => {
    const randomIndex = Math.floor(Math.random() * locationArray.length);
    return locationArray[randomIndex];
  };

export const randomLocation = getRandomLocation(locationsArray);



