class Solution {
    public int longestConsecutive(int[] nums) {
        Set <Integer> set = new HashSet<Integer>();

        for(int i = 0; i < nums.length; i++){
            set.add(nums[i]);
        }
        Integer result = 0;
        for(int i = 0; i < nums.length; i++){
            if(!set.contains(nums[i] - 1)){
                Integer counter = 1;
                while(true){
                    if(!set.contains(nums[i]+ counter)) break;
                    counter++;
                }
                if(counter > result) result = counter;
            }
        }

        return result;
    }
}