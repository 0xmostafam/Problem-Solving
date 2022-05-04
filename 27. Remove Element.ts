// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

const removeElement = (nums: number[], val: number): number => {
  let i = 0;
  let j = nums.length - 1;

  while (nums[j] === val && j >= 0) j--;

  for (; i < nums.length && j > i; i++) {
    if (nums[i] === val) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      while (nums[j] === val && j >= 0) j--;
    }
  }
  return j + 1;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
