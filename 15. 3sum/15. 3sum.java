class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        Set<List<Integer>> result = new HashSet<>();
        for(int i = 0; i < nums.length; i++) {
            Integer pointerOne = i + 1;
            Integer pointerTwo = nums.length - 1;
            while(pointerOne < pointerTwo) {
                Integer total = nums[i] + nums[pointerOne] + nums[pointerTwo];

                if(total > 0) pointerTwo--;
                else if(total < 0) pointerOne++;
                else {
                    result.add(new ArrayList<Integer>(Arrays.asList(nums[i], nums[pointerOne], nums[pointerTwo])));
                    pointerOne++;
                }

            }
        }
        return result.stream().toList();
    }
}