/*
    Problem Description
Given a number A, find if it is COLORFUL number or not.

If number A is a COLORFUL number return 1 else, return 0.

What is a COLORFUL Number:

A number can be broken into different contiguous sub-subsequence parts. 
Suppose, a number 3245 can be broken into parts like 3 2 4 5 32 24 45 324 245. 
And this number is a COLORFUL number, since product of every digit of a contiguous subsequence is different.



Example Input
Input 1:

 A = 23
Input 2:

 A = 236


Example Output
Output 1:

 1
Output 2:

 0


Example Explanation
Explanation 1:

 Possible Sub-sequences: [2, 3, 23] where
 2 -> 2 
 3 -> 3
 23 -> 6  (product of digits)
 This number is a COLORFUL number since product of every digit of a sub-sequence are different. 
Explanation 2:

 Possible Sub-sequences: [2, 3, 6, 23, 36, 236] where
 2 -> 2 
 3 -> 3
 6 -> 6
 23 -> 6  (product of digits)
 36 -> 18  (product of digits)
 236 -> 36  (product of digits)
 This number is not a COLORFUL number since the product sequence 23  and sequence 6 is same. 
*/

let colorful = function (A) {
  let a = A.toString();
  let hs = new Set();
  for (let i = 0; i < a.length; i++) {
    if (hs.has(+a[i])) {
      return 0;
    }
    hs.add(+a[i]);
  }
  for (let i = 0; i < a.length - 1; i++) {
    let mul = +a[i];
    for (let j = i + 1; j < a.length; j++) {
      mul *= +a[j];
      if (hs.has(mul)) {
        return 0;
      } else {
        hs.add(mul);
      }
    }
  }
  return 1;
};

console.log(colorful(2634));
