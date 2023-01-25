const prblmSatatment = {
  //param A : head node of linked list
  //return the head node in the linked list
  solve: function (A) {
    if (A == null || A.next == null) {
      return null;
    }
    let slowPointer = A;
    let fastPointer = A;
    let temp = A;
    while (fastPointer.next != null) {
      if (fastPointer.next.next == null) {
        temp = slowPointer;
        slowPointer = slowPointer.next;
        break;
      }
      temp = slowPointer;
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next;
    }
    temp.next = slowPointer.next;
    return A;
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

console.log(prblmSatatment.solve(LL.head));
