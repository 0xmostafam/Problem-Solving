class Solution {
    public int maxArea(int[] height) {
        Integer x = 0;
        Integer y = height.length - 1;
        Integer a = 0;
        while(x < y){
            a = Math.max(a, Math.min(height[x], height[y]) * (y - x));
            if(height[x] < height[y]) x++;
            else y--;
        }
        return a;
    }
}