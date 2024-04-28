class Solution {
    public int evalRPN(String[] tokens) {
        Stack<String> total = new Stack<String>();
        Stack<Integer> backlog = new Stack<Integer>();

        for(int i = tokens.length - 1; i >= 0; i--) {
            total.push(tokens[i]);
        }

        Integer a,b;
        while(!total.empty()){
            String chr = total.pop();
            switch(chr){
                case "+":
                    total.push(Integer.toString(backlog.pop() + backlog.pop()));
                    break;
                case "-":
                    a = backlog.pop();
                    b = backlog.pop();
                    total.push(Integer.toString(b - a));
                    break;
                case "*":
                    total.push(Integer.toString(backlog.pop() * backlog.pop()));
                    break;
                case "/":
                    a = backlog.pop();
                    b = backlog.pop();
                    total.push(Integer.toString(b / a));
                    break;
                default:
                    backlog.push(Integer.valueOf(chr));
            }
        }

        return backlog.pop();
    }
}