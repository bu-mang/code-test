export class Queue {
  constructor() {
    this.queueList = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  enqueue(item) {
    this.queueList[this.tailIndex] = item;
    this.tailIndex++;
  }
  dequeue() {
    const item = this.queueList[this.headIndex];
    if (item === undefined) {
      console.error("Reference Error. No item to Delete");
      return false;
    }
    delete this.queueList[this.headIndex];
    this.headIndex++;
    return item;
  }
  peek() {
    return this.queueList[this.headIndex];
  }
  getLength() {
    return this.tailIndex - this.headIndex;
  }
  reset() {
    for (let i = this.headIndex; i < this.tailIndex; i++) {
      delete this.queueList[i];
    }
    this.headIndex = 0;
    this.tailIndex = 0;
    return "Reset Done";
  }
  makeArr() {
    const objVals = Object.values(this.queueList);
    return objVals;
  }
  recent() {
    return this.queueList[this.tailIndex - 1];
  }
}

const queue = new Queue();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue([1, 2, 3, 4, 5]);
console.log(queue.peek(), "peek");
console.log(queue.getLength(), "getLength");
console.log(queue.makeArr(), "getAccess");
console.log(queue.recent(), "recent");
console.log(queue);

// console.log(queue.dequeue(), "dequeue");
// console.log(queue.dequeue(), "dequeue");
// console.log(queue.dequeue(), "dequeue");
// console.log(queue.dequeue(), "dequeue");
// console.log(queue);
// console.log(queue.reset());
// console.log(queue);

// console.log(que.getLength());
