const mySqrt = (x: number): number => {
  let i = 0;
  let j = 1;
  while(true){
    x -= j;
    if(x < 0) return i
    i++;
    j += 2;
  }
};