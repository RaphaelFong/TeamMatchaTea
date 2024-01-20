const calculateGrade = (timer) => {
    const minutes = Math.floor(timer / 60);
    // Adjust the grade based on the remaining minutes
    if (minutes >= 4) {
      return 'A';
    } else if (minutes >= 3) {
      return 'B';
    } else if (minutes >= 2) {
      return 'C';
    } else if (minutes >= 1) {
      return 'D';
    } else if (minutes > 0) {
      return 'E';
    } else {
      return 'F';
    }
  };
  
  export default calculateGrade;
  