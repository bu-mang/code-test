let fs = require("fs");
let [tcNum, ...list] = fs.readFileSync("input.txt").toString().trim().split("\n");

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
    return this.tail - this.head;
  }
}

const tcs = [];
for (let i = 0; i < list.length; i++) {
  if ((i + 1) % 2 > 0) {
    tcs.push([list[i], list[i + 1]]);
  }
}
console.log(tcs);

let finalResult = "";
for (let tc of tcs) {
  const [amount, target] = tc[0].split(" ").map(Number);
  const queue = new Queue();
  let args = tc[1].split(" ").map(Number);
  args.forEach((arg, i) => queue.enqueue({ prior: arg, org: i }));

  const priority = args.slice().sort((a, b) => a - b); // 오름차순 배열
  const res = [];

  while (queue.getLength() !== 0) {
    const deq = queue.dequeue();
    if (deq.prior === priority[priority.length - 1]) {
      priority.pop();
      res.push(deq);
    } else {
      queue.enqueue(deq);
    }
  }
  const tarIdx = res.findIndex((arg) => arg.org === target) + 1;

  finalResult += tarIdx + "\n";
}
console.log(finalResult);
