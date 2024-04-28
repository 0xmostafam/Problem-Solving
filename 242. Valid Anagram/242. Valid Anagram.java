class Solution {
    public boolean isAnagram(String s, String t) {
        HashMap<Character, Integer> firstMap = strToMap(s);
        HashMap<Character, Integer> secondMap = strToMap(t);
        
        if (firstMap.size() != secondMap.size()) return false;
        
        for (Map.Entry<Character, Integer> entry : firstMap.entrySet()) {
            Character key = entry.getKey();
            Integer value = entry.getValue();
            
            if (secondMap.containsKey(key) && secondMap.get(key).equals(value)) continue;
            return false;
        }
        return true;
    
    }
    
    public HashMap<Character, Integer> strToMap(String s){
        HashMap<Character, Integer> firstMap = new HashMap<Character, Integer> ();
        
        for(int i = 0; i < s.length(); i++){
            Character c = s.charAt(i);
            
            if(firstMap.containsKey(c)) firstMap.put(c, firstMap.get(c) + 1);
            else firstMap.put(c, 1);
        }
        
        return firstMap;
    }
}