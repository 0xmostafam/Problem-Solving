const find132pattern = (nums: number[]): boolean => {
  if (nums.length < 3) return false;
  let min = nums[0];
  let stack: number[] = [];
  let size = nums.length - 1;
  let success = false;
  nums.slice(1).every((element) => {
    while (stack.length !== 0 && element >= stack[stack.length - 1])
      stack.pop();
    if (
      stack.length !== 0 &&
      element < stack[stack.length - 1] &&
      element > min
    ) {
      success = true;
      return false;
    }
    stack.push(element);
    min = Math.min(min, element);
    return true;
  });

  return success;
};

console.log(find132pattern([1, 0, 1, -4, -3]));
