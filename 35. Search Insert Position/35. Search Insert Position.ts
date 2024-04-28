const searchInsert = (nums: number[], target: number): number => {
  let lowerBound = 0;
  let upperBound = nums.length - 1;
  let mid;
  while(true){
    
    if(nums[lowerBound] > target)
      return lowerBound ;
    else if (nums[upperBound] < target)
      return upperBound + 1;

    mid = Math.floor((lowerBound + upperBound) / 2)
    
    if (nums[mid] === target){
      break;
    }
    else if(nums[mid] > target){
      upperBound = mid - 1
    } else {
      lowerBound = mid + 1;
    }
  }

  return mid
};