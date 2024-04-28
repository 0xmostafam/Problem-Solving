class Solution {
    public int findMinArrowShots(int[][] points) {
        
        int length = points.length;
        int minimumNumberOfBalloons = 0;
        Arrays.sort(points, (p1, p2) -> Integer.compare(p1[1], p2[1]));
        long currentEnd = Long.MIN_VALUE;
        for (int [] point : points) {
            int nextStart = point[0];
            int nextEnd = point[1];
            if (nextStart > currentEnd) {
                currentEnd = nextEnd;
                minimumNumberOfBalloons++;
            }
        }
        return minimumNumberOfBalloons;
    }
}