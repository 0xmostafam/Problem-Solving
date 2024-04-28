class Solution {
    public int numSubarrayProductLessThanK(int[] nums, int k) {
        if (k <= 1) return 0;
        int left = 0;
        int right = 0;
        int length = nums.length;
        int totalCount = 0;
        int product = 1;
        while(right < length)
        {
            product *= nums[right];            
            while (product >= k) {
                product /= nums[left++];
            }
            totalCount += right - left + 1;
            right++;
        }
        
        return totalCount;
    }
}