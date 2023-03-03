/*
Problem Description
Merge two sorted linked lists, A and B, and return it as a new list.

The new list should be made by splicing together the nodes of the first two lists and should also be sorted.



Problem Constraints
0 <= |A|, |B| <= 105



Input Format
The first argument of input contains a pointer to the head of linked list A.

The second argument of input contains a pointer to the head of linked list B.



Output Format
Return a pointer to the head of the merged linked list.



Example Input
Input 1:

 A = 5 -> 8 -> 20
 B = 4 -> 11 -> 15
Input 2:

 A = 1 -> 2 -> 3
 B = Null


Example Output
Output 1:

 4 -> 5 -> 8 -> 11 -> 15 -> 20
Output 2:

 1 -> 2 -> 3


Example Explanation
Explanation 1:

 Merging A and B will result in 4 -> 5 -> 8 -> 11 -> 15 -> 20 
Explanation 2:

 We don't need to merge as B is empty. 


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

const LL1 = new LinkedList();
LL1.appendNode(new Node(46));
LL1.appendNode(new Node(76));
LL1.appendNode(new Node(100));

const LL2 = new LinkedList();
LL2.appendNode(new Node(45));
LL2.appendNode(new Node(82));
LL2.appendNode(new Node(98));
const prblmStatement = {
  //param A : head node of linked list
  //return an integer
  solve: function (A, B) {
    if (A == null) {
      return B;
    }
    if (B == null) {
      return A;
    }
    let ptrA = A;
    let ptrB = B;
    if (A.data < B.data) {
      head = A;
      ptrA = ptrA.next;
    } else {
      head = B;
      ptrB = ptrB.next;
    }
    let temp = head;
    while (ptrA != null && ptrB != null) {
      if (ptrA.data < ptrB.data) {
        temp.next = ptrA;
        ptrA = ptrA.next;
      } else {
        temp.next = ptrB;
        ptrB = ptrB.next;
      }
      temp = temp.next;
    }
    if (ptrA != null) {
      temp.next = ptrA;
    }
    if (ptrB != null) {
      temp.next = ptrB;
    }
    return head;
  },
};

console.log(prblmStatement.solve(LL1.head, LL2.head));
