class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }

  /*
  base case:
  if tree already contains value, do nothing

  if no more children 
      -> if smaller, add child on left
      -> if bigger or equal, add child on right

  recursion:
  compare to value -> if less, go left / if more or equal, go right
  */

  insert(value) {
    const newChild = new BinarySearchTree(value);

    const insertValue = (node) => {
      // console.log("node:", node);

      // if node does not have a child
      if (!node.leftChild && !node.rightChild) {
        if (node.value < value) {
          node.leftChild = newChild;
          return this;
        } else {
          node.rightChild = newChild;
          return this;
        }
      }

      // when node has a child
      if (node.value < value && node.leftChild) {
        insertValue(node.leftChild);
      } else if (node.value >= value && node.rightChild) {
        insertValue(node.rightChild);
      }
    };

    console.log(this);
    insertValue(this);

    return this;
  }

  // contain(value) {
  //   let result = false;
  //   const searchInChildren = function(element) {
  //     //base case
  //     if (element.value === value) {
  //       result = true;
  //       return result;
  //     } else if (element.leftChild) {
  //       element.leftChild.forEach((item) => {
  //         searchInChildren(item);
  //       });
  //     } else if (element.rightChild) {
  //       element.rightChild.forEach((item) => {
  //         searchInChildren(item);
  //       });
  //     }
  //   };
  //   searchInChildren(this);
  //   return result;
  // }
  /*
1. is current node value the target? 
2. if no, check if there is a left child
3. recursively do (1) & (2)
4. if no left child, recurse back
4. when no more left children, go back to element
*/
  traverseDepthFirstInOrder(callback) {}
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
