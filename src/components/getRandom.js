export const getRandom = (randomArray) => {
    const randomIndex = Math.floor(Math.random() * randomArray.length);
    return randomArray[randomIndex];
  };