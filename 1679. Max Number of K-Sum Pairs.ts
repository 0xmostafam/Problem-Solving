// You are given an integer array nums and an integer k.

// In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

// Return the maximum number of operations you can perform on the array.

const maxOperations = (nums: number[], k: number): number => {
  let map = new Map();
  let count = 0;
  nums.forEach((number, index) => {
    if (map.has(k - number)) {
      count++;
      if (map.get(k - number).length > 1) map.get(k - number).splice(1, 1);
      else map.delete(k - number);
    } else {
      if (map.has(number)) map.set(number, [...map.get(number), index]);
      else map.set(number, [index]);
    }
  });

  return count;
};

console.log(
  maxOperations([2, 5, 4, 4, 1, 3, 4, 4, 1, 4, 4, 1, 2, 1, 2, 2, 3, 2, 4, 2], 3)
);
