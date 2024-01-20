export const shuffleWord = (word) => {
    return word.split('').sort(() => Math.random() - 0.5).join('');
  };

export const getRandomWord = (wordsArray) => {
    const randomIndex = Math.floor(Math.random() * wordsArray.length);
    return wordsArray[randomIndex];
  };
export const shuffledWordBank = ['kiasu', 'siao', 'jialat'];
export const requiredWord = getRandomWord(shuffledWordBank);
export const shuffledWord = shuffleWord(requiredWord);

