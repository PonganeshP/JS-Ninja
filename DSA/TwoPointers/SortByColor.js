/*
    Problem Description
Given an array with N objects colored red, white, or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent red, white, and blue, respectively.

Note: Using the library sort function is not allowed.


Example Input
Input 1 :
    A = [0 1 2 0 1 2]
Input 2:

    A = [0]


Example Output
Output 1:
    [0 0 1 1 2 2]
Output 2:

    [0]


Example Explanation
Explanation 1:
    [0 0 1 1 2 2] is the required order.
    

*/

module.exports = {
  //param A : array of integers
  //return a array of integers
  sortColors: function (A) {
    let colorArr = [0, 0, 0];
    for (let i in A) {
      if (A[i] == 0) {
        colorArr[0]++;
      } else if (A[i] == 1) {
        colorArr[1]++;
      } else if (A[i] == 2) {
        colorArr[2]++;
      }
    }
    let a = 0;
    for (let j in colorArr) {
      for (let loop = 0; loop < colorArr[j]; loop++) {
        A[a] = j;
        a++;
      }
    }
    return A;
  },
};
