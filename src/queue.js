const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.last = null;
    this.size = 0;
  }

  getUnderlyingList() {
    let current = this.head;

    return current;
  }

  enqueue(value) {
    let node = new Node(value);

    if (this.size === 0) {
      this.head = node;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = new Node(value);
    }

    this.size++;
  }

  dequeue() {
    let current = this.head;
    this.head = this.head.next;
    this.size--;

    return current.value;
  }
}

module.exports = {
  Queue,
};
