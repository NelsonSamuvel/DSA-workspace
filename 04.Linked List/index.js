// create Node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head.value) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
  }

  pop() {
    if (!this.head || this.length <= 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return;
    }

    let temp = this.head;
    let prev = this.head;

    while (temp.next) {
      prev = temp;
      temp = temp.next;
    }

    prev.next = null;
    this.tail = prev;
    this.length--;

    return temp;
  }
}

const myLinkedList = new LinkedList();
myLinkedList.push(5);
myLinkedList.push(6);
myLinkedList.push(7);
console.log(myLinkedList);

myLinkedList.pop();
console.log("After Popping...");

console.log(myLinkedList);
