/*
    Problem Description
Given a singly linked list A and an integer B, reverse the nodes of the list B at a time and return the modified linked list.


Example Input
Input 1:

 A = [1, 2, 3, 4, 5, 6]
 B = 2
Input 2:

 A = [1, 2, 3, 4, 5, 6]
 B = 3


Example Output
Output 1:

 [2, 1, 4, 3, 6, 5]
Output 2:

 [3, 2, 1, 6, 5, 4]


Example Explanation
Explanation 1:

 For the first example, the list can be reversed in groups of 2.
    [[1, 2], [3, 4], [5, 6]]
 After reversing the K-linked list
    [[2, 1], [4, 3], [6, 5]]
Explanation 2:

 For the second example, the list can be reversed in groups of 3.
    [[1, 2, 3], [4, 5, 6]]
 After reversing the K-linked list
    [[3, 2, 1], [6, 5, 4]]

*/

const prblmSatatment = {
  //param A : head node of linked list
  //return the head node in the linked list
  reverseList: function (A, B) {
    if (B <= 1 || A == null || A.next == null) {
      return A;
    }
    let h1 = A;
    let h2 = h1.next;
    let count = 0;
    let temp;
    while (h2 != null && count < B - 1) {
      temp = h2.next;
      h2.next = h1;
      h1 = h2;
      h2 = temp;
      count++;
    }
    A.next = this.reverseList(h2, B);
    return h1;
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
LL.appendNode(new Node(4));
LL.appendNode(new Node(5));
LL.appendNode(new Node(6));

console.log(prblmSatatment.reverseList(LL.head, 2));
