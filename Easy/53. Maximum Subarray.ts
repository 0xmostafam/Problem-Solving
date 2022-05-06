// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

// This video helped me solve it : https://www.youtube.com/watch?v=5WZl3MMT0Eg&ab_channel=NeetCode

const maxSubArray = (nums: number[]): number => {
  let maxSum = nums[0];
  let curSum = 0;

  nums.forEach((element) => {
    if (curSum < 0) curSum = 0;
    curSum += element;
    maxSum = Math.max(maxSum, curSum);
  });

  return maxSum;
};
