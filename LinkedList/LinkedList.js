class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Insert last
  insertLast(data) {
    let node = new Node(data);
    let current;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }

    this.size++;
  }

  // Insert At Index
  insertAt(data, index) {
    // if index is out of range
    if (index < 0 || index > this.size) {
      return;
    }

    // if Index is 0 insert first
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const node = new Node(data);
    let curr, prev;
    let count = 0;
    curr = this.head;

    while (count < index) {
      prev = curr;
      count++;
      curr = curr.next;
    }

    node.next = curr;
    prev.next = node;

    this.size++;
  }

  // Get at Index
  getData(index) {
    let curr = this.head;
    let count = 0;
    while (curr) {
      if (count == index) {
        console.log(curr.data);
      }
      count++;
      curr = curr.next;
    }
    return null;
  }

  // Remove at Index
  deleteAt(index) {
    let prev;
    let curr = this.head;
    let count = 0;
    if (index === 0) {
      this.head = curr.next;
    } else {
      while (count < index) {
        prev = curr;
        count++;
        curr = curr.next;
      }

      prev.next = curr.next;
    }
    this.size--;
  }
  // Clear list
  deleteList() {
    this.head = null;
    this.size = 0;
  }
  // print list data
  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// const ll = new LinkedList();

// ll.insertFirst(300);
// ll.insertFirst(200);
// ll.insertFirst(100);

// ll.printListData()
