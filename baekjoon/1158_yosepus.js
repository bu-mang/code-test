//요세푸스 문제, 1158
let fs = require("fs");
let [total, interval] = fs.readFileSync("input.txt").toString().split(" ").map(Number);

// class Queue {
//   constructor() {
//     this.list = {};
//     this.head = 0;
//     this.tail = 0;
//   }
//   enqueue(item) {
//     this.list[this.tail] = item;
//     this.tail++;
//   }
//   dequeue() {
//     const temp = this.list[this.head];
//     delete this.list[this.head];
//     this.head++;
//     return temp;
//   }
//   getLength() {
//     return this.tail - this.head;
//   }
// }

let cnt = 0;
const ans = [];
const queue = [];
for (let i = 1; i <= total; i++) {
  queue.push(i);
}

while (queue.length !== 0) {
  cnt++;
  let deq = queue.shift();
  if (cnt === interval) {
    cnt = 0;
    ans.push(deq);
    continue;
  }
  queue.push(deq);
}
console.log("<" + ans.join(", ") + ">");

// 1(6) 2(3) 3(1) 4(7) 5(5) 6(2) 7(4)
// let visited = new Array(total).fill().map((v) => 0);
// let cur = 0;
// let ans = [];
// let turn = 0;
// let reset = interval;

// 0 1!3 2!1 3 4 5!2 6
// 1번째
// 2번째
// 3번째
// ,,,

// while (ans.length !== total) {
//   console.log(turn, interval, ans, visited);
//   if (turn !== interval && visited[cur + turn] !== "x") {
//     console.log(visited[cur + turn], "!X visited cur+turn");
//     console.log("!");
//     turn++;
//     continue;
//   } else if (turn !== interval && visited[cur + turn] === "x") {
//     console.log(visited[cur + turn], "X visited cur+turn");
//     console.log("@");
//     turn++;
//     interval++;
//     continue;
//   } else {
//     cur = cur + turn <= total ? cur + turn : (cur + turn) % total;
//     visited[cur - 1] = "x";
//     ans.push(cur);
//     console.log("this: ", cur + turn, "interval:", interval, visited);
//     turn = 0;
//     turn++;
//     interval = reset;
//   }
// }

// console.log(ans);
