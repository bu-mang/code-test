// 1697 숨바꼭질
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

const fs = require("fs").readFileSync("input.txt");
const [start, goal] = fs.toString().trim().split(" ").map(Number);

const visited = new Array(100001).fill().map((x) => 0);

function bfs() {
  const queue = new Queue();
  queue.enqueue(start);
  while (queue.length !== 0) {
    let cur = queue.dequeue();
    // console.log("cur: ", cur);
    if (cur === goal) return visited[cur];
    for (let nxt of [cur + 1, cur - 1, cur * 2]) {
      if (!visited[nxt]) {
        if (nxt < 0 || nxt > 100001) continue;
        queue.enqueue(nxt);
        visited[nxt] = visited[cur] + 1;
      }
    }
  }
}
console.log(bfs());
console.log(visited);
/*










*/

// const MAX = 10001;
// let [n, k] = input[0].split(" ").map(Number);
// let visited = new Array(MAX).fill(0);

// function bfs() {
//   const queue = new Queue();
//   queue.enqueue(n);
//   while (queue.getLength() !== 0) {
//     let cur = queue.dequeue();
//     if (cur === k) {
//       return visited[cur];
//     }
//     for (let nxt of [cur - 1, cur + 1, cur * 2]) {
//       // 공간 벗어난 경우 무시
//       if (nxt < 0 || nxt >= MAX) continue;
//       if (visited[nxt] === 0) {
//         visited[nxt] = visited[cur] + 1;
//         queue.enqueue(nxt);
//       }
//     }
//   }
// }
// console.log(bfs());

/*
















*/

//dfs

// const fs = require("fs");
// const input = fs.readFileSync("input.txt").toString().trim().split(" ").map(Number);
// let [cur, tar] = input;
// let min = Math.abs(tar - cur);
// let visited = [];

// function dfs(cur, tar, mv) {
//   if (mv >= min) {
//     return;
//   } else if (cur > tar) {
//     mv = mv + (cur - tar);
//     if (mv > min) {
//       return;
//     } else if (mv < min) min = mv;
//     console.log("over, visited:", visited, "  back:", cur - tar, "  mv:", mv);
//     return;
//   } else if (cur === tar) {
//     if (mv < min) min = mv;
//     console.log("visited: ", visited, "mv: ", mv);
//     return;
//   }
//   mv++;
//   visited.push(cur * 2);
//   dfs(cur * 2, tar, mv);
//   visited.pop();
//   visited.push(cur + 1);
//   dfs(cur + 1, tar, mv);
//   visited.pop();
//   visited.push(cur - 1);
//   dfs(cur - 1, tar, mv);
//   visited.pop();
// }
// if (cur < tar) {
//   dfs(cur, tar, 0, visited);
// }

// console.log("result: ", min);

//5 17
