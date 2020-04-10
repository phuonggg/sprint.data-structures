class Tree {
  constructor(value) {
    this.value = value;
    this.children = []; //only intermediate children
  }

  addChild(value) {
    const newChild = new Tree(value);
    this.children.push(newChild);
    return this.children[this.children.length - 1];
  }

  contains(value) {
    let result = false;
    const searchInChildren = function(element) {
      //base case
      if (element.value === value) {
        result = true;
        return result;
      } else if (element.children) {
        element.children.forEach((item) => {
          searchInChildren(item);
        });
      }
    };
    searchInChildren(this);
    return result;
  }

  remove(value) {
    let deletedNode = undefined;

    if (this.contains(value) === false) {
      return deletedNode;
    }

    const searchInChildren = function(element) {
      //check root
      if (element.value === value) {
        deletedNode = value;
        if (element.children) {
          // check if element to delete has a child
          element.value = undefined;
          element.children = [];
        }
      } else if (element.children) {
        element.children.forEach((item) => {
          searchInChildren(item);
        });
      }
    };
    searchInChildren(this);
    return deletedNode;
  }

  /*
+-------------------------+
| Advanced Requirements!! |
+-------------------------+

The following are part of the advanced requirements.
Do not proceed until you are done with the basic
requirements for ALL data structures in this exercise.

*/
  traverseDepthFirst(fn) {}

  traverseBreadthFirst(fn) {}
}

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
module.exports = { Tree }; //needed to export
