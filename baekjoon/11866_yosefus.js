let fs = require("fs");
let [N, K] = fs.readFileSync("input.txt").toString().trim().split(" ").map(Number);

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
    let item = this.list[this.head];
    delete this.list[this.head];
    this.head++;
    return item;
  }

  getLength() {
    return this.head - this.tail;
  }
}

const queue = new Queue();
const res = [];

for (let i = 1; i <= N; i++) {
  queue.enqueue(i);
}

let turn = 0;
while (queue.getLength() !== 0) {
  turn++;
  let tar = queue.dequeue();

  if (turn === K) {
    turn = 0;
    res.push(tar);
  } else {
    queue.enqueue(tar);
  }
}

console.log("<" + res.join(", ") + ">");
