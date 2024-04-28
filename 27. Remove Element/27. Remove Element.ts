const removeElement = (nums: number[], val: number): number => {
  
  let i = 0;
  let j = nums.length - 1;
  
  while(nums[j] === val && j >= 0) j--;
  
  for (; i < nums.length && j > i; i++) {
    if (nums[i] === val){
      let temp = nums[i];
      nums[i] = nums[j]
      nums[j] = temp;
      while(nums[j] === val && j >= 0) j--;
    }
  }
  return j + 1;
};