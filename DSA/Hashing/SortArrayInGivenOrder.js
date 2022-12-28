/*
  Problem Description
Given two arrays of integers A and B, Sort A in such a way that the relative order among the elements will be the same as those are in B.
For the elements not present in B, append them at last in sorted order.

Return the array A after sorting from the above method.

NOTE: Elements of B are unique.



Example Input
Input 1:

A = [1, 2, 3, 4, 5]
B = [5, 4, 2]
Input 2:

A = [5, 17, 100, 11]
B = [1, 100]


Example Output
Output 1:

[5, 4, 2, 1, 3]
Output 2:

[100, 5, 11, 17]


Example Explanation
Explanation 1:

 Simply sort as described.
Explanation 2:

 Simply sort as described.

 
*/
let solve = function (A, B) {
  let hm = new Map();
  let arr1 = [],
    arr2 = [];
  for (let i = 0; i < B.length; i++) {
    hm.set(B[i], i);
  }
  for (let i = 0; i < A.length; i++) {
    if (hm.has(A[i])) {
      arr1.push(A[i]);
    } else {
      arr2.push(A[i]);
    }
  }
  arr1.sort((a, b) => hm.get(a) - hm.get(b));
  arr2.sort((a, b) => a - b);
  return [...arr1, ...arr2];
};

let arr = solve([1, 2, 3, 4, 5], [5, 4, 2]);
console.log(arr);
