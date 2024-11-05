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
    if (!this.head.value || this.length <= 1) {
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

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head.value) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }

    return newNode;
  }

  shift() {
    if (!this.head.value) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return;
    }
    const shiftNode = this.head;
    this.head = this.head.next;
    shiftNode.next = null;
    this.length--;
    return shiftNode;
  }

  displayList() {
    let temp = this.head;
    let res = [];
    while (temp) {
      res.push(temp.value);
      temp = temp.next;
    }
    return res;
  }

  getFirst() {
    return this.head.value ? this.head.value : null;
  }

  getLast() {
    return this.tail.value ? this.tail.value : null;
  }

  get(index) {
    if (!this.head) {
      return -1;
    }
    let temp = this.head;
    let i = 0;
    while (temp) {
      if (i === index) {
        return temp;
      }
      i++;
      temp = temp.next;
    }
    return null;
  }

  set(index, value) {
    let count = 0;
    let temp = this.head;

    while (temp) {
      if (count === index) {
        temp.value = value;
        return temp;
      }
      temp = temp.next;
      count++;
    }
    return null;
  }

  insert(index, value) {
    const newNode = new Node(value);
    if (index >= this.length) {
      this.push(value);
    } else {
      let temp = this.get(index - 1);
      const nextNode = temp.next;
      temp.next = newNode;
      newNode.next = nextNode;
      this.length++;
    }
    return newNode;
  }

  size() {
    return this.length;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

const myLinkedList = new LinkedList();
myLinkedList.unshift(1);
// myLinkedList.unshift(2);
myLinkedList.unshift(3);
myLinkedList.unshift(4);

console.log(myLinkedList.displayList());
console.log(myLinkedList.size());

myLinkedList.clear();

console.log(myLinkedList.displayList());
console.log(myLinkedList.size());
