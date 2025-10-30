class Queue {
  constructor() {
    this.list = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(item) {
    this.list[this.tail] = item;
    this.tail++;
  }

  dequeue() {
    if (this.head === this.tail) return null;
    let item = this.list[this.head];
    delete this.list[this.head];
    this.head++;
    return item;
  }

  getLength() {
    return this.tail - this.head;
  }

  peek() {
    return this.list[this.head];
  }
}

const queue = new Queue();
