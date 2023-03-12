/*
    Problem Description
Given an expression string A, examine whether the pairs and the orders of “{“,”}”, ”(“,”)”, ”[“,”]” are correct in A.

Refer to the examples for more clarity.



Problem Constraints
1 <= |A| <= 100



Input Format
The first and the only argument of input contains the string A having the parenthesis sequence.



Output Format
Return 0 if the parenthesis sequence is not balanced.

Return 1 if the parenthesis sequence is balanced.



Example Input
Input 1:

 A = {([])}
Input 2:

 A = (){
Input 3:

 A = ()[] 


Example Output
Output 1:

 1 
Output 2:

 0 
Output 3:

 1 

*/

class Stack {
  constructor(top = -1) {
    this.top = top;
    this.arr = [];
  }
  push(x) {
    this.top++;
    this.arr[this.top] = x;
    return this.arr;
  }
  pop() {
    if (this.top == -1) {
      return -1;
    }
    let x = this.arr[this.top];
    this.top--;
    return x;
  }
  peek() {
    if (this.top === -1) {
      return -1;
    }
    return this.arr[this.top];
  }
  isEmpty() {
    return this.top == -1 ? true : false;
  }
}

let prblmStatment = solve("([])");
console.log(prblmStatment);

function solve(str) {
  let stack1 = new Stack();
  let closingBrackets = ["}", "]", ")"];
  let openingBrackets = ["{", "[", "("];
  for (let letter of str) {
    if (stack1.isEmpty() && closingBrackets.includes(letter)) {
      return 0;
    } else if (openingBrackets.includes(letter)) {
      stack1.push(letter);
    } else if (stack1.peek() != 1 && closingBrackets.includes(letter)) {
      if (stack1.peek() == "{" && letter == "}") {
        stack1.pop();
      } else if (stack1.peek() == "[" && letter == "]") {
        stack1.pop();
      } else if (stack1.peek() == "(" && letter == ")") {
        stack1.pop();
      } else {
        return 0;
      }
    }
  }
  return stack1.isEmpty() ? 1 : 0;
}
