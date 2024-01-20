import { getRandom } from "./getRandom";


export const shuffleWord = (str) => {
  const originalArray = str.split('');
  let shuffledArray;

  do {
    
    shuffledArray = originalArray.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
  } while (shuffledArray.join('') === str); // Check if the shuffled word is the same as the original

  return shuffledArray.join('');
};


export const shuffledWordBank = ['kiasu', 'siao', 'jialat', 'taiji', 'chope'];
export const requiredWord = getRandom(shuffledWordBank);

export const shuffledWord = shuffleWord(requiredWord);

