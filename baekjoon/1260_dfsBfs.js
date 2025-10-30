// 1260, dfs와 bfs
let fs = require("fs");
let [info, ...list] = fs.readFileSync("input.txt").toString().trim().split("\n");

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

const [n, m, start] = info.split(" ").map(Number);
let visited = new Array(n).fill().map((v) => 0);
let DFSpath = [];

let obj = {};
for (let item of list) {
  let [a, b] = item.split(" ");
  if (!obj[a]) {
    obj[a] = [];
  }
  if (!obj[b]) {
    obj[b] = [];
  }
  obj[a].push(Number(b));
  obj[b].push(Number(a));
}
console.log(obj);
for (let key in obj) {
  obj[key].sort((a, b) => a - b);
}

function dfs(num) {
  for (let nxt of obj[num]) {
    if (!visited[nxt]) {
      visited[nxt] = 1;
      DFSpath.push(nxt);
      dfs(nxt);
    }
  }
}
if (obj[start]) {
  DFSpath.push(start);
  visited[start] = 1;
  dfs(start);
  console.log(DFSpath.join(" "));
} else {
  console.log(start);
}

visited = new Array(n).fill().map((v) => 0);
let BFSpath = [];

function bfs(start) {
  let queue = new Queue();
  queue.enqueue(start);
  while (queue.getLength() !== 0) {
    let cur = queue.dequeue();
    BFSpath.push(cur);
    for (let nxt of obj[cur]) {
      if (!visited[nxt]) {
        visited[nxt] = 1;
        queue.enqueue(nxt);
      }
    }
  }
}
if (obj[start]) {
  visited[start] = 1;
  bfs(start);
  console.log(BFSpath.join(" "));
} else {
  console.log(start);
}
