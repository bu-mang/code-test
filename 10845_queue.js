// 큐 10845
let fs = require("fs");
let [amount, ...orders] = fs.readFileSync("input.txt").toString().trim().split("\n");

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
    if (this.head === this.tail) {
      return -1;
    }
    let temp = this.list[this.head];
    delete this.list[this.head];
    this.head++;
    return temp;
  }
  getLength() {
    return this.tail - this.head;
  }
  peek() {
    return this.list[this.head];
  }
  lastPush() {
    return this.list[this.tail - 1];
  }
}

const queue = new Queue();
let ans = "";

for (let order of orders) {
  let spl = order.split(" ");
  if (spl[0] === "push") {
    queue.enqueue(spl[1]);
  } else if (spl[0] === "pop") {
    let deq = queue.dequeue();
    ans += deq + "\n";
  } else if (spl[0] === "size") {
    ans += queue.getLength() + "\n";
  } else if (spl[0] === "empty") {
    let len = queue.getLength();
    ans += len ? "0" + "\n" : "1" + "\n";
  } else if (spl[0] === "front") {
    let tar = queue.peek();
    ans += tar ? tar + "\n" : "-1" + "\n";
  } else if (spl[0] === "back") {
    let tar = queue.lastPush();
    ans += tar ? tar + "\n" : "-1" + "\n";
  }
}
console.log(ans);
