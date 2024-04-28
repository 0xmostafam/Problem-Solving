class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> map = new HashMap<Integer, Integer>();

        for(int num: nums){
            if(map.get(num) == null) map.put(num, 0);
            map.put(num, map.get(num) + 1);
        }
        int[] result = new int[k];
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a,b) -> map.get(b) - map.get(a));

        for(int key: map.keySet()) {
            maxHeap.add(key);
        }
        for(int i = 0; i < k; i++){
            result[i] = maxHeap.poll();
        }
        return result;
    }
}