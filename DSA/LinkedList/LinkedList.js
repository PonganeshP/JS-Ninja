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

  insert_node(pos, no) {
    if (pos == 1) {
      let temp = this.head;
      this.head = no;
      no.next = temp;
      return;
    }

    let node = this.head;
    let count = 1;
    let rem1, rem2;
    if (node == null) {
      this.head = no;
      return;
    }
    while (node.next) {
      count++;
      if (count == pos) {
        rem1 = node;
        rem2 = node.next;
        break;
      }
      node = node.next;
    }
    if (!rem1) {
      node.next = no;
    } else {
      rem1.next = no;
      no.next = rem2;
    }
  }

  delete_node(pos) {
    if (this.size <= pos || pos < 1) {
      return;
    }
    let temp = this.head;
    while (temp.next != null && pos > 1) {
      pos--;
      temp = temp.next;
    }
    // delete next element from ll
    let x = temp.next;
    temp.next = x.next;
    x.next = null;
    this.size--;
  }

  print_ll() {
    let sb = new String();
    let temp = this.head.next;
    while (temp != null) {
      sb += temp.val + " ";
      temp = temp.next;
    }
    sb = sb.trimEnd();
    console.log(sb.toString());
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const LL = new LinkedList();
LL.appendNode(new Node(1));
LL.appendNode(new Node(2));
LL.appendNode(new Node(35));
LL.insert_node(3, new Node(3));

console.log(LL);
