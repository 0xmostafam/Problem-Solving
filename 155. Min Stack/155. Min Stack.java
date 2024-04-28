class StackNode {
    public int value;
    public int minimum;

    public StackNode(int value, int minimum){
        this.value = value;
        this. minimum = minimum;
    }
}
class MinStack {
    public Stack<StackNode> stack;
    
    public MinStack() {
        this.stack = new Stack<StackNode>();
    }
    
    public void push(int val) {
        if(stack.empty())
            stack.add(new StackNode(val, val));
        else 
            stack.add(new StackNode(val, Math.min(stack.peek().minimum, val)));
    }
    
    public void pop() {
        stack.pop();
    }
    
    public int top() {
        return stack.peek().value;
    }
    
    public int getMin() {
        if(stack.empty()) return 0;
        return stack.peek().minimum;
    }
}


/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(val);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */