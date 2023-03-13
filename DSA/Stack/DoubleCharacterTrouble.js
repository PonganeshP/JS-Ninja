/*
Problem Description
You are given a string A.

An operation on the string is defined as follows:

Remove the first occurrence of the same consecutive characters. eg for a string "abbcd", the first occurrence of same consecutive characters is "bb".

Therefore the string after this operation will be "acd".

Keep performing this operation on the string until there are no more occurrences of the same consecutive characters and return the final string.



Problem Constraints
1 <= |A| <= 100000



Input Format
First and only argument is string A.



Output Format
Return the final string.



Example Input
Input 1:

 A = abccbc
Input 2:

 A = ab


Example Output
Output 1:

 "ac"
Output 2:

 "ab"


Example Explanation
Explanation 1:

Remove the first occurrence of same consecutive characters. eg for a string "abbc", 
the first occurrence of same consecutive characters is "bb".
Therefore the string after this operation will be "ac".
Explanation 2:

 No removals are to be done.


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

let prblmStatment = solve("abccbc");
console.log(prblmStatment);

function solve(str) {
  let stack1 = new Stack();
  let output = "";
  for (let letter of str) {
    if (stack1.peek() != letter) {
      stack1.push(letter);
    } else {
      stack1.pop();
    }
  }
  while (!stack1.isEmpty()) {
    output = stack1.pop() + output;
  }
  return output;
}
