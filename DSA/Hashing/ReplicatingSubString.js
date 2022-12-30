/*
    Problem Description

Given a string B, find if it is possible to re-order the characters of the string B so that it can be represented as a concatenation of A similar strings.

Eg: B = aabb and A = 2, then it is possible to re-arrange the string as "abab" which is a concatenation of 2 similar strings "ab".

If it is possible, return 1, else return -1.


Example Input

Input 1:

 A = 2
 B = "bbaabb"
Input 2:

 A = 1
 B = "bc"


Example Output

Output 1:

 1
Output 2:

 1


Example Explanation

Explanation 1:

 We can re-order the given string into "abbabb".
Explanation 2:

 String "bc" is already arranged.

 

*/

let solve = function (A, B) {
  if (A == 1) {
    return 1;
  }
  let hm = new Map();
  for (let i in B) {
    hm.set(B[i], (hm.get(B[i]) || 0) + 1);
  }
  let ans = 1;
  for (let val of hm.values()) {
    if (val != A) {
      ans = -1;
      break;
    }
  }
  return ans;
};

console.log(solve(2, "aacbbc"));
