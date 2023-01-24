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
