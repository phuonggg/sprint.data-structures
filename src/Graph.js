class Graph {
  constructor() {
    /**
     * There are many representations of Graph.
     * We can store Graph in many ways.
     * One way is by using Adjacency List.
     */
    this.nodes = {}; // Adjacency List
  }

  addNode(value) {
    this.nodes[value] = [];
    return undefined;
  }

  removeNode(value) {
    let valueConnectToNode = this.nodes[value][0];
    if (this.nodes[value][0]) {
      this.removeEdge(value, valueConnectToNode);
    }
    delete this.nodes[value];
  }

  contains(value) {
    let result = false;

    if (this.nodes[value] !== undefined) {
      result = true;
    }

    return result;
  }

  addEdge(value1, value2) {
    if (this.contains(value1) && this.contains(value2)) {
      if (
        this.nodes[value1].indexOf(value2) === -1 &&
        this.nodes[value2].indexOf(value1) === -1
      ) {
        this.nodes[value1].push(value2);
        this.nodes[value2].push(value1);
      }
      return "Already existing edges";
    }
    return "Invalid node value";
  }

  removeEdge(value1, value2) {
    let index1 = this.nodes[value2].indexOf(value1);
    let index2 = this.nodes[value1].indexOf(value2);
    if (index1 !== -1 && index2 !== -1) {
      this.nodes[value2].splice(index1, 1);
      this.nodes[value1].splice(index2, 1);
    }
  }

  hasEdge(value1, value2) {
    let index1 = this.nodes[value2].indexOf(value1);
    let index2 = this.nodes[value1].indexOf(value2);
    if (index1 !== -1 && index2 !== -1) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Graph;

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
