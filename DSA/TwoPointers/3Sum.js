/*
    Problem Description
Given an array A of N integers, find three integers in A such that the sum is closest to a given number B. Return the sum of those three integers.

Assume that there will only be one solution.


Example Input
Input 1:

A = [-1, 2, 1, -4]
B = 1
Input 2:

 
A = [1, 2, 3]
B = 6


Example Output
Output 1:

2
Output 2:

6


Example Explanation
Explanation 1:

 The sum that is closest to the target is 2. (-1 + 2 + 1 = 2)
Explanation 2:

 Take all elements to get exactly 6.

*/

function solve(A, B) {
  A.sort((a, b) => a - b);
  let N = A.length;
  let closestSum = 0;
  for (let i = 0; i < N - 2; i++) {
    let pt1 = i + 1;
    let pt2 = N - 1;
    while (pt1 < pt2) {
      let sum = A[pt1] + A[pt2] + A[i];
      closestSum = i == 0 ? sum : closestSum;
      if (Math.abs(B - sum) < Math.abs(B - closestSum)) {
        closestSum = sum;
      }
      if (sum > B) {
        pt2--;
      } else {
        pt1++;
      }
    }
  }
  return closestSum;
}

let A = [-1, 2, 1, -4];
let B = 1;
console.log(solve(A, B));
