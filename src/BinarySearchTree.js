class BSTNode {
  constructor(value, leftChild) {
    this.value = value;
    this.leftChild = null;
    this.rightCHild = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = new BSTNode(null, null);
  }
}

module.exports = BinarySearchTree;

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   Basic Requirements:         X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
