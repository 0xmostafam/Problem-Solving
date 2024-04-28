class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        HashMap<String, List<String>> strsMap= new HashMap<>();
        for(String str: strs){
            char [] chars = str.toCharArray();
            Arrays.sort(chars);
            String sorted = new String(chars);
            
            if(!strsMap.containsKey(sorted)){
                strsMap.put(sorted, new ArrayList<>());
            }
            
            strsMap.get(sorted).add(str);
        }
        
        return new ArrayList<>(strsMap.values());
    }
}