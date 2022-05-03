// Given an integer array nums, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order.

// Return the shortest such subarray and output its length.

const findUnsortedSubarray = (nums: number[]): number => {
  if (nums === null) return 0;

  let length = nums.length;
  let stack: number[] = [];
  let lastElement = Number.MIN_SAFE_INTEGER;
  let total = 0;

  const sorted = nums.every((element, index) => {
    if (element >= lastElement) {
      stack.push(element);
      lastElement = element;
      return true;
    } else {
      lastElement = Math.min(...nums.slice(index));
      return false;
    }
  });

  if (sorted) {
    return 0;
  } else {
    while (stack.length !== 0 && stack[stack.length - 1] > lastElement)
      stack.pop();
    total += stack.length;
    stack.length = 0;
    lastElement = Number.MAX_SAFE_INTEGER;
  }

  const reversedNum = nums.reverse();
  reversedNum.every((element, index) => {
    if (element <= lastElement) {
      stack.push(element);
      lastElement = element;
      return true;
    } else {
      lastElement = Math.max(...reversedNum.slice(index));
      return false;
    }
  });

  while (stack.length !== 0 && stack[stack.length - 1] < lastElement)
    stack.pop();
  total += stack.length;
  return length - total;
};
