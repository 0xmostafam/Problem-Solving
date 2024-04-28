class Solution {
    public int[] productExceptSelf(int[] nums) {
        if(nums.length == 0) return nums;
        if(nums.length == 1) return new int[]{0};
        int[] postfix = new int[nums.length];
        int[] suffix = new int[nums.length];

        int postTotal = 1;
        int sufTotal = 1;
        for(int i = 0; i < nums.length; i++) {
            postTotal *= nums[i];
            sufTotal *= nums[nums.length - i - 1];

            postfix[i] = postTotal;
            suffix[nums.length - i - 1] = sufTotal;
        }
                
        for(int i = 0; i < nums.length; i++) {
            if(i == 0) nums[i] = suffix[i+1];
            else if(i == nums.length - 1) nums[i] = postfix[i-1];
            else nums[i] = suffix[i+1] * postfix[i-1];
        }

        return nums;
    }
}