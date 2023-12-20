//1463 1로 만들기
let fs = require("fs");
let input = Number(fs.readFileSync("input.txt").toString());

let min = 1000001;
let turn = 0;
let path = [];
function dfs(tar, turn) {
  if (turn === min) return;
  if (tar === 1) {
    if (turn < min) {
      min = turn;
    }
    return;
  }
  if (tar % 3 === 0) {
    path.push(tar / 3);
    dfs(tar / 3, turn + 1);
    path.pop();
  }
  if (tar % 2 === 0) {
    path.push(tar / 2);
    dfs(tar / 2, turn + 1);
    path.pop();
  }
  if (tar - 1) {
    path.push(tar - 1);
    dfs(tar - 1, turn + 1);
    path.pop();
  }
}

dfs(input, 0);
console.log(min);
