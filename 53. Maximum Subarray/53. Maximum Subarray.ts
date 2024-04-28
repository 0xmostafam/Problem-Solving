const maxSubArray = (nums: number[]): number => {
  let maxSum = nums[0];
  let curSum = 0;

  nums.forEach(element => {
    if(curSum < 0)
      curSum = 0
    curSum += element;
    maxSum = Math.max(maxSum, curSum)
  })

  return maxSum;
};