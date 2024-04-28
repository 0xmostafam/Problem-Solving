class Solution {
    public boolean containsDuplicate(int[] nums) {
        HashSet<Integer> numMap = new HashSet<Integer>();

        for(int i = 0; i < nums.length; i++) {
            if (numMap.contains(nums[i])) return true;
            numMap.add(nums[i]);
        }

        return false;
    }
}