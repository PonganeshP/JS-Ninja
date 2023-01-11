/*
    Problem Description
The gray code is a binary numeral system where two successive values differ in only one bit.

Given a non-negative integer A representing the total number of bits in the code, print the sequence of gray code.

A gray code sequence must begin with 0.


Example Input
Input 1:

A = 2
Input 1:

A = 1


Example Output
output 1:

[0, 1, 3, 2]
output 2:

[0, 1]


Example Explanation
Explanation 1:

for A = 2 the gray code sequence is:
    00 - 0
    01 - 1
    11 - 3
    10 - 2
So, return [0,1,3,2].
Explanation 1:

for A = 1 the gray code sequence is:
    00 - 0
    01 - 1
So, return [0, 1].

*/

let solve = (A) => {
  let temp = [0];
  for (let i = 0; i < A; i++) {
    let tempSize = temp.length;
    for (let j = tempSize - 1; j >= 0; j--) {
      temp.push(temp[j] + (1 << i));
    }
  }
  return temp;
};

let A = 3;
console.log(solve(A));
