// Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

// Implement the MyStack class:

// void push(int x) Pushes element x to the top of the stack.
// int pop() Removes the element on the top of the stack and returns it.
// int top() Returns the element on the top of the stack.
// boolean empty() Returns true if the stack is empty, false otherwise.

class MyStack {
  private queue: number[];
  constructor() {
    this.queue = [];
  }

  push(x: number): void {
    this.queue.push(x);
    for (let i = 0; i < this.queue.length - 1; i++) {
      this.queue.push(this.queue.shift());
    }
  }

  pop(): number {
    return this.queue.shift();
  }

  top(): number {
    return this.queue[0];
  }

  empty(): boolean {
    return this.queue.length === 0;
  }
}

var obj = new MyStack();
obj.push(1);
obj.push(2);
obj.push(3);
var param_2 = obj.pop();
var param_3 = obj.top();
var param_4 = obj.empty();
