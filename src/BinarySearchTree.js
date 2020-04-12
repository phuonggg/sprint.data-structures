class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    const insertedNode = new BinarySearchTree(value);

    const searchTree = (node) => {
      if (value < node.value) {
        if (!node.left) {
          node.left = insertedNode;
        } else {
          searchTree(node.left);
        }
      }
      if (value > node.value) {
        if (!node.right) {
          node.right = insertedNode;
        } else {
          searchTree(node.right);
        }
      }
    };

    searchTree(this);
    return this;
  }

  contains(value) {
    let currentNode = this;

    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      }
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  traverseDepthFirstInOrder(callback) {
    const traverse = (node) => {
      // if left child exists, go left again
      if (node.left) traverse(node.left);

      callback(node);
      // if right child exists, go right again
      if (node.right) traverse(node.right);
    };

    traverse(this);

    return undefined;
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
