/*
    Problem Description
Given two arrays of integers A and B of size N each, where each pair (A[i], B[i]) for 0 <= i < N represents a unique point (x, y) in 2D Cartesian plane.

Find and return the number of unordered triplets (i, j, k) such that (A[i], B[i]), (A[j], B[j]) and (A[k], B[k]) form a right-angled triangle with the triangle having one side parallel to the x-axis and one side parallel to the y-axis.

NOTE: The answer may be large so return the answer modulo (109 + 7).


Example Input
Input 1:

 A = [1, 1, 2]
 B = [1, 2, 1]
Input 2:

 A = [1, 1, 2, 3, 3]
 B = [1, 2, 1, 2, 1]


Example Output
Output 1:

 1
Output 2:

 6


Example Explanation
Explanation 1:

 All three points make a right angled triangle. So return 1.
Explanation 2:

 6 triplets which make a right angled triangle are:    (1, 1), (1, 2), (2, 2)
                                                       (1, 1), (3, 1), (1, 2)
                                                       (1, 1), (3, 1), (3, 2)
                                                       (2, 1), (3, 1), (3, 2)
                                                       (1, 1), (1, 2), (3, 2)
                                                       (1, 2), (3, 1), (3, 2)

*/

let solve = function (A, B) {
  let hmx = new Map();
  let hmy = new Map();
  for (let i = 0; i < A.length; i++) {
    if (!hmx.has(A[i])) {
      hmx.set(A[i], 1);
    } else {
      hmx.set(A[i], hmx.get(A[i]) + 1);
    }
    if (!hmy.has(B[i])) {
      hmy.set(B[i], 1);
    } else {
      hmy.set(B[i], hmy.get(B[i]) + 1);
    }
  }
  let ans = 0;
  for (let i in A) {
    let val = ((hmx.get(A[i]) - 1) * (hmy.get(B[i]) - 1)) % 1000000007;
    ans = (ans + val) % 1000000007;
  }
  return ans;
};

console.log(solve([1, 1, 2, 3, 3], [1, 2, 1, 2, 1]));
