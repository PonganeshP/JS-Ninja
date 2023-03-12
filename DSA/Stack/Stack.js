class Stack {
  constructor(top = -1) {
    this.top = top;
    this.arr = [];
  }
  push(element) {
    this.top += 1;
    this.arr[this.top] = element;
  }
  pop() {
    if (this.top == -1) {
      return -1;
    }
    let x = this.arr[this.top];
    this.top -= 1;
    return x;
  }
  peek() {
    if (this.top == -1) {
      return -1;
    }
    return this.arr[this.top];
  }
  isEmpty() {
    return this.top <= -1 ? true : false;
  }
}

let stack1 = new Stack();
stack1.push(100);

console.log(stack1);
console.log(stack1.peek());
console.log(stack1.isEmpty());
