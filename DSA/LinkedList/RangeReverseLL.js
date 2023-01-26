/*
Problem Description
Reverse a linked list A from position B to C.

NOTE: Do it in-place and in one-pass.


Example Input
Input 1:

 A = 1 -> 2 -> 3 -> 4 -> 5
 B = 2
 C = 4

Input 2:

 A = 1 -> 2 -> 3 -> 4 -> 5
 B = 1
 C = 5


Example Output
Output 1:

 1 -> 4 -> 3 -> 2 -> 5
Output 2:

 5 -> 4 -> 3 -> 2 -> 1


Example Explanation
Explanation 1:

 In the first example, we want to reverse the highlighted part of the given linked list : 1 -> 2 -> 3 -> 4 -> 5 
 Thus, the output is 1 -> 4 -> 3 -> 2 -> 5 
Explanation 2:

 In the second example, we want to reverse the highlighted part of the given linked list : 1 -> 4 -> 3 -> 2 -> 5  
 Thus, the output is 5 -> 4 -> 3 -> 2 -> 1 

*/

const prblmStmnt = {
  //param A : head node of linked list
  //param B : integer
  //param C : integer
  //return the head node in the linked list
  reverseBetween: function (A, B, C) {
    let head;
    let h1 = A;
    let h2 = h1.next;
    if (h1 == null || h2 == null) {
      return h1;
    }
    let count = 1,
      rem1,
      rem2,
      temp;
    let len = C - B;
    while (h2 != null) {
      if (count == B) {
        count = 0;
        rem2 = h1;
        while (count < len) {
          count++;
          temp = h2.next;
          h2.next = h1;
          h1 = h2;
          h2 = temp;
        }
        if (!head) {
          head = h1;
        }
        break;
      } else {
        if (!head) {
          head = h1;
        }
        count++;
        temp = h2.next;
        rem1 = h1;
        h1 = h2;
        h2 = temp;
      }
    }
    rem2.next = h2;
    if (rem1) {
      rem1.next = h1;
    }
    return head;
  },
};

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  appendNode(newNode) {
    let node = this.head;
    if (this.head == null) {
      this.head = newNode;
      return;
    }
    while (node.next) {
      node = node.next;
    }
    node.next = newNode;
  }
}

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = null;
  }
}

let LL = new LinkedList();
LL.appendNode(new Node(1));
LL.appendNode(new Node(2));
LL.appendNode(new Node(3));
console.log(prblmStmnt.reverseBetween(LL.head, 2, 3));
