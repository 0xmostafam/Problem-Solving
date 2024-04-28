const maxOperations = (nums: number[], k: number): number => {
  let map = new Map();
  let count = 0;
  nums.forEach((number, index) => {
    if(map.has(k - number)){
      count++;
      if (map.get(k - number).length > 1)
        map.get(k - number).splice(1,1)
      else
        map.delete(k - number)
    } else {
      if (map.has(number))
        map.set(number, [...map.get(number), index])
      else
        map.set(number, [index])
    }
  })

  return count;
};