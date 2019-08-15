class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  insert(data) {
    try {
      const newNode = new Node(data);
      if (this.head === null) {
        this.head = newNode;
      } else {
        let currentNode = this.head;
        while (currentNode.next !== null) {
          currentNode = currentNode.next;
        }
        currentNode.next = newNode;
      }
      return 'New node appended to list';
    } catch (e) {
      return 'Error calling .append()';
    }
  }

  print() {
    try {
      let currentNode = this.head;
      if (currentNode === null) {
        return [];
      }
      let result = [];
      while (currentNode) {
        result.push(currentNode.data);
        currentNode = currentNode.next;
      }
      return result;
    } catch (e) {
      return 'Error calling .print()';
    }
  }
}

module.exports = SinglyLinkedList;
