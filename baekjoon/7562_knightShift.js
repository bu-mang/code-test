// 나이트의 이동, 7562
let fs = require("fs");
let [tcNum, ...rest] = fs.readFileSync("input.txt").toString().trim().split("\n");

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
    const item = this.list[this.head];
    delete this.list[this.head];
    this.head++;
    return item;
  }
  getLength() {
    return this.tail - this.head;
  }
}

let tcs = [];
let ans = [];
for (let i = 0; i < tcNum; i++) {
  tcs.push(rest.slice(0 + 3 * i, 3 + 3 * i));
}

for (let tc of tcs) {
  let [board, start, tar] = tc;
  start = start.split(" ").map(Number);
  tar = tar.split(" ").map(Number);
  board = new Array(+board).fill().map((v) => new Array(+board).fill().map((v) => 0));

  const queue = new Queue();
  queue.enqueue(start);
  while (queue.length !== 0) {
    const cur = queue.dequeue();
    // console.log("cur: ", cur);
    // console.log("cur.join: ", cur.join(" "), "    turns: ", board[cur[0]][cur[1]]);
    if (cur.join(" ") === tar.join(" ")) {
      ans.push(board[cur[0]][cur[1]]);
      break;
    } // cur와 tar가 일치하는지 (성공조건)
    for (nxt of [
      //이동할 수 있는곳 다 queue에 집어넣기
      [cur[0] - 1, cur[1] - 2],
      [cur[0] - 2, cur[1] - 1],
      [cur[0] - 2, cur[1] + 1],
      [cur[0] - 1, cur[1] + 2],
      [cur[0] + 1, cur[1] + 2],
      [cur[0] + 2, cur[1] + 1],
      [cur[0] + 2, cur[1] - 1],
      [cur[0] + 1, cur[1] - 2],
    ]) {
      if (
        board[nxt[0]] !== undefined &&
        board[nxt[0]][nxt[1]] !== undefined && //
        board[nxt[0]][nxt[1]] === 0
      ) {
        //체스판 벗어나는 곳이면 continue
        board[nxt[0]][nxt[1]] = board[cur[0]][cur[1]] + 1; //방문처리
        queue.enqueue(nxt); //queue에 추가하기
      }
    }
  }
}

console.log(ans.join("\n"));
