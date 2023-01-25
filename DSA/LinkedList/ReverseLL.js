/*
Problem Description
You are given a singly linked list having head node A. You have to reverse the linked list and return the head node of that reversed list.

NOTE: You have to do it in-place and in one-pass.

Example Input
Input 1:

 A = 1 -> 2 -> 3 -> 4 -> 5 -> NULL 
Input 2:

 A = 3 -> NULL 


Example Output
Output 1:

 5 -> 4 -> 3 -> 2 -> 1 -> NULL 
Output 2:

 3 -> NULL 


Example Explanation
Explanation 1:

 The linked list has 5 nodes. After reversing them, the list becomes : 5 -> 4 -> 3 -> 2 -> 1 -> NULL 
Expalantion 2:

 The linked list consists of only a single node. After reversing it, the list becomes : 3 -> NULL 

*/

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

let prblmStmnt = {
  //param A : head node of linked list
  //return the head node in the linked list
  reverseList: function (A) {
    let head = A;
    if (head == null || head.next == null) {
      return head;
    }
    let h1 = head;
    let h2 = head.next;
    let temp = h2;
    while (h2 != null) {
      temp = h2.next;
      h2.next = h1;
      h1 = h2;
      h2 = temp;
    }
    head.next = null;
    return h1;
  },
};

console.log(prblmStmnt.reverseList(LL.head));
