class Queue {
  constructor() {
    this.container = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(item) {
    this.container[this.tail] = item;
    this.tail++;
  }
  dequeue() {
    const item = this.container[this.head];
    delete this.container[this.head];
    return item;
  }
  peek() {
    return this.container[this.head];
  }
  getLength() {
    return this.tail - this.head;
  }
}
