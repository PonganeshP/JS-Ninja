/*
Problem Description
Given a linked list of integers, find and return the middle element of the linked list.

NOTE: If there are N nodes in the linked list and N is even then return the (N/2 + 1)th element.


Example Input
Input 1:

 1 -> 2 -> 3 -> 4 -> 5
Input 2:

 1 -> 5 -> 6 -> 2 -> 3 -> 4


Example Output
Output 1:

 3
Output 2:

 2


Example Explanation
Explanation 1:

 The middle element is 3.
Explanation 2:

 The middle element in even length linked list of length N is ((N/2) + 1)th element which is 2.

*/

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  appendNode(newNode) {
    let node = this.head;
    if (node == null) {
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
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const LL = new LinkedList();
LL.appendNode(new Node(46));
LL.appendNode(new Node(76));
LL.appendNode(new Node(35));

const prblmStatement = {
  //param A : head node of linked list
  //return an integer
  solve: function (A) {
    /*
    Brute Force:

    let count = 0;
    if (A.next == null) {
      return A.head;
    }
    let temp = A;
    while (temp != null) {
      count++;
      temp = temp.next;
    }
    let mid;
    if (count % 2 == 0) {
      mid = count / 2 + 1;
    } else {
      mid = Math.ceil(count / 2);
    }
    temp = A;
    count = 0;
    while (temp != null) {
      count++;
      if (mid == count) {
        return temp.data;
      }
      temp = temp.next;
    }
    
    */

    // Find in single iteration using slow and fast pointer

    let slow = A;
    let fast = A;
    while (fast.next != null) {
      if (fast.next.next == null) {
        slow = slow.next;
        break;
      }
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow.next.data;
  },
};

console.log(prblmStatement.solve(LL.head));
