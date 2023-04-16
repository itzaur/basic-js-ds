const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    this.treeRoot = addItem(this.treeRoot, data);

    function addItem(node, data) {
      if (!node) return new Node(data);

      if (node.data === data) return node;

      if (data < node.data) {
        node.left = addItem(node.left, data);
      } else {
        node.right = addItem(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return searchItem(this.treeRoot, data);

    function searchItem(node, data) {
      if (!node) return false;

      if (node.data === data) return true;

      if (data < node.data) {
        return searchItem(node.left, data);
      } else {
        return searchItem(node.right, data);
      }
    }
  }

  find(data) {
    let currentItem = this.treeRoot;

    while (currentItem) {
      if (currentItem.data === data) {
        return currentItem;
      } else if (currentItem.data > data) {
        currentItem = currentItem.left;
      } else {
        currentItem = currentItem.right;
      }
    }

    return currentItem;
  }

  remove(data) {
    return removeItem(this.treeRoot, data);

    function removeItem(node, data) {
      if (!node) return null;

      if (data < node.data) {
        node.left = removeItem(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeItem(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let dataMinRight = node.right;

        while (dataMinRight.left) {
          dataMinRight = dataMinRight.left;
        }

        node.data = dataMinRight.data;
        node.right = removeItem(node.right, dataMinRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.treeRoot) return;

    let node = this.treeRoot;

    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.treeRoot) return;

    let node = this.treeRoot;

    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
