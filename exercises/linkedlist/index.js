// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while(node.next) {
      node = node.next;
    }
    return node;
  }

  removeFirst() {
    if (this.head.next) {
      this.head = this.head.next; 
    } else {
      this.head = null;
    }
    return this.head;
  }

  removeLast() {
    
  }

  clear() {
    this.head = null;
  }

  size() {
    let counter = 0;
    let node = this.head;
    while(node) {
      counter ++;
      node = node.next;
    }
    return counter;
  }
}

module.exports = { Node, LinkedList };
