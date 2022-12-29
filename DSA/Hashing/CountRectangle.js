/**
 * 
 * Problem Description
Given two arrays of integers A and B of size N each, where each pair (A[i], B[i]) for 0 <= i < N represents a unique point (x, y) in a 2-D Cartesian plane.

Find and return the number of unordered quadruplet (i, j, k, l) such that (A[i], B[i]), (A[j], B[j]), (A[k], B[k]) and (A[l], B[l]) form a rectangle with the rectangle having all the sides parallel to either x-axis or y-axis.



Example Input
Input 1:

 A = [1, 1, 2, 2]
 B = [1, 2, 1, 2]
Input 1:

 A = [1, 1, 2, 2, 3, 3]
 B = [1, 2, 1, 2, 1, 2]


Example Output
Output 1:

 1
Output 2:

 3


Example Explanation
Explanation 1:

 All four given points make a rectangle. So, the answer is 1.
Explanation 2:

 3 quadruplets which make a rectangle are: (1, 1), (2, 1), (2, 2), (1, 2)
                                           (1, 1), (3, 1), (3, 2), (1, 2)
                                           (2, 1), (3, 1), (3, 2), (2, 2)
 */

let solve = function (A, B) {
  let hs = new Set();
  for (let i in A) {
    hs.add(A[i].toString() + ", " + B[i].toString());
  }
  let count = 0;
  for (let i in A) {
    for (let j in B) {
      if (
        A[i] < A[j] &&
        B[i] < B[j] &&
        hs.has(A[i].toString() + ", " + B[j].toString()) &&
        hs.has(A[j].toString() + ", " + B[i].toString())
      ) {
        count++;
      }
    }
  }
  return count;
};

console.log(solve([1, 1, 2, 2, 3, 3], [1, 2, 1, 2, 1, 2]));
