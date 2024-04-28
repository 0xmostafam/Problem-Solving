const sortArrayByParity = (nums: number[]): number[] => {
    let i = 0;
    let j = nums.length - 1;

    while(i < j){
        if(nums[i] % 2 === 1 && nums[j] % 2 === 0){
            [nums[i], nums[j]] = [nums[j], nums[i]]
            i++;
            j--;
        } else if (nums[i] % 2 === 0){
            i++;
        } else if (nums[j] % 2 === 1){
            j--;
        }
    }

    return nums;
};