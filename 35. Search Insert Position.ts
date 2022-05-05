// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

const searchInsert = (nums: number[], target: number): number => {
  let lowerBound = 0;
  let upperBound = nums.length - 1;
  let mid;
  while (true) {
    if (nums[lowerBound] > target) return lowerBound - 1;
    else if (nums[upperBound] < target) return upperBound + 1;

    mid = Math.floor((lowerBound + upperBound) / 2);

    if (nums[mid] === target) {
      break;
    } else if (nums[mid] > target) {
      upperBound = mid - 1;
    } else {
      lowerBound = mid + 1;
    }
  }
  return mid;
};
