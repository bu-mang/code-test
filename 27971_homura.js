// 27971 강아지는 많을수록 좋다.
let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

class Queue {
  constructor() {
    this.list = {};
    this.tail = 0;
    this.head = 0;
  }
  enqueue(item) {
    this.list[this.tail] = item;
    this.tail++;
  }
  dequeue() {
    const item = this.list[this.head];
    delete this.list[this.head];
    this.head++;
    return item;
  }
  getLength() {
    return this.tail - this.head;
  }
}

let [goal, banned, spell1, spell2] = input[0].split(" ").map(Number);
let visited = new Array(goal + 1).fill().map((v) => 0);
for (let i = 1; i <= banned; i++) {
  const [min, max] = input[i].split(" ").map(Number);
  for (let j = min; j <= max; j++) {
    visited[j] = 1;
  }
}

function bfs() {
  const queue = new Queue();
  queue.enqueue(0);
  while (queue.getLength() !== 0) {
    let cur = queue.dequeue();
    if (cur === goal) return visited[cur];
    if (cur > goal) continue;
    for (let spelled of [cur + spell1, cur + spell2]) {
      if (!visited[spelled]) {
        visited[spelled] = visited[cur] + 1;
        queue.enqueue(spelled);
      }
    }
  }
}
console.log(bfs(0) || -1);

/*













*/

// //dfs
// let fs = require("fs");
// let input = fs.readFileSync("input.txt").toString().trim().split("\n");

// let [goal, banned, spell1, spell2] = input[0].split(" ").map(Number)
// const arr = [];
// const visited = new Array(goal + 1).fill().map((v) => 0);
// for (let i = 1; i < input.length; i++) {
//   arr.push(input[i].split(" ").map(Number));
// }
// arr.forEach((v) => {
//   for (let i = v[0]; i <= v[1]; i++) {
//     visited[i] = 1;
//   }
// });

// let cur = 0;
// let turn = 0;
// let min = 100001;
// const path = [];

// function createCats(cur, turn) {
//   if (cur > goal || turn > min) return;
//   if (cur === goal && turn < min) {
//     min = turn;
//     console.log("turn:", turn);
//     console.log("path:", path);
//     return;
//   }

//   for (let i = 0; i < 2; i++) {
//     if (!visited[cur]) {
//       visited[cur] = 1;
//       path.push(cur);
//       createCats(cur + spell1, turn + 1);
//       createCats(cur + spell2, turn + 1);
//       visited[cur] = 0;
//       path.pop();
//     }
//   }
// }

// createCats(0, 0);
// if (min === 100001) console.log(-1);
