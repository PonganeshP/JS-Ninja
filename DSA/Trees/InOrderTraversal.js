class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

// let root = new Node(1);
// let L1_Left = (root.left = new Node(2));
// let L1_Right = (root.right = new Node(3));
// L1_Left.left = new Node(4);
// L1_Left.right = new Node(5);
// L1_Right.left = new Node(6);
// L1_Right.right = new Node(7);
// L1_Left.left.left = new Node(8);

let root = new Node(1);
let L1_Right = (root.right = new Node(2));
// L1_Left.left = new Node(4);
// L1_Left.right = new Node(5);
// L1_Right.left = new Node(6);
L1_Right.left = new Node(3);
// L1_Left.left.left = new Node(8);

console.log(root);

let prblmStmnt = (root) => {
  let outArr = [];
  inOrderTraversal(root, outArr);
  return outArr;
};

function inOrderTraversal(root, arr) {
  if (root == null) {
    return;
  }
  inOrderTraversal(root.left, arr);
  arr.push(root.data);
  inOrderTraversal(root.right, arr);
}

prblmStmnt(root);
