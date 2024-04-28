class Solution {
    public boolean isPalindrome(String s) {
        StringBuilder strBuild = new StringBuilder();
        
        for(int i = 0; i < s.length(); i++){
            char c = s.charAt(i);
            if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9')){
                strBuild.append(Character.toLowerCase(c));
            }
        }

        Integer pointerOne = 0;
        Integer pointerTwo = strBuild.length() - 1;

        while(pointerOne < pointerTwo){
            if(strBuild.charAt(pointerOne) != strBuild.charAt(pointerTwo)) return false;
            pointerOne++;
            pointerTwo--;
        }
        return true;
    }
}