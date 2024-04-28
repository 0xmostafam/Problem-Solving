class Solution {
    public int[] getConcatenation(int[] nums) {
        int newSize = nums.length;
        int[] result = new int[newSize * 2];
        for (int i = 0; i < newSize; i++) {
            result[i] = result[i + newSize] = nums[i];
        }
        return result;
    }
}