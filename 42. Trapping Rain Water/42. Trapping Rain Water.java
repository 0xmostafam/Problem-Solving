class Solution {
    public int trap(int[] height) {
        int pointerOne = 0;
        int pointerTwo = height.length - 1;
        int maxLeft = height[pointerOne];
        int maxRight = height[pointerTwo];
        int total = 0;
        while(pointerOne < pointerTwo){
            if(maxLeft <= maxRight) {
                pointerOne++;
                maxLeft = Math.max(maxLeft, height[pointerOne]);
                total += Math.max((maxLeft - height[pointerOne]), 0);
            }
            else {
                pointerTwo--;
                maxRight = Math.max(maxRight, height[pointerTwo]);
                total += Math.max((maxRight - height[pointerTwo]), 0);
            }
        }
        return total;
    }

}