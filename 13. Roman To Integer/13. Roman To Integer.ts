const romanToInt = (s: string): number => {
  const numeralsMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let previousValue = Number.MAX_SAFE_INTEGER ;
  let total = 0;
  [...s].forEach(char => {
    if (numeralsMap[char] > previousValue){
        total += numeralsMap[char] - ( previousValue * 2 )
    } else {
        total += numeralsMap[char]
    }
    previousValue = numeralsMap[char]
  })

  return total;
};