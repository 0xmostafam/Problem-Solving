class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<Character>();
        char[] ch = s.toCharArray();
        for(char chr: ch){
            switch(chr){
                case '[':
                case '(':
                case '{':
                    stack.push(chr);
                    break;
                case ']':
                    if(stack.isEmpty() || stack.pop() != '[') return false;
                    break;
                case ')':
                    if(stack.isEmpty() || stack.pop() != '(') return false;
                    break;
                case '}':
                    if(stack.isEmpty() || stack.pop() != '{') return false;
                    break;
            }
        }
        
        if(!stack.isEmpty()) return false;
        return true;            
    }
}