class Solution {
    public int[] twoSum(int[] numbers, int target) {
        Integer pointerOne = 0;
        Integer pointerTwo = numbers.length - 1;

        while(pointerOne < pointerTwo){
            Integer total = numbers[pointerOne] + numbers[pointerTwo];
            if(total > target) pointerTwo--;
            else if (total < target) pointerOne++;
            else return new int[]{pointerOne + 1, pointerTwo + 1};
        }

        return new int[]{0,1};
    }
}