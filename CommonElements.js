/*
    Problem Description
Given two integer arrays, A and B of size N and M, respectively. Your task is to find all the common elements in both the array.

NOTE:

Each element in the result should appear as many times as it appears in both arrays.
The result can be in any order.


Example Input
Input 1:

 A = [1, 2, 2, 1]
 B = [2, 3, 1, 2]
Input 2:

 A = [2, 1, 4, 10]
 B = [3, 6, 2, 10, 10]


Example Output
Output 1:

 [1, 2, 2]
Output 2:

 [2, 10]


Example Explanation
Explanation 1:

 Elements (1, 2, 2) appears in both the array. Note 2 appears twice in both the array.
Explantion 2:

 Elements (2, 10) appears in both the array.
 
*/

module.exports = {
  //param A : array of integers
  //param B : array of integers
  //return a array of integers
  solve: function (A, B) {
    let res = [];
    let hm1 = new Map();
    for (let i in A) {
      hm1.set(A[i], (hm1.get(A[i]) || 0) + 1);
    }
    for (let i in B) {
      if (hm1.has(B[i])) {
        if (hm1.get(B[i]) >= 1) {
          res.push(B[i]);
          hm1.set(B[i], hm1.get(B[i]) - 1);
          if (hm1.get(B[i]) < 1) {
            hm1.delete(B[i]);
          }
        }
      }
    }
    return res;
  },
};
