// 21736 헌내기는 친구가 필요해
let fs = require("fs");
let [meta, ...list] = fs.readFileSync("input.txt").toString().trim().split("\n");

list = list.map((v) => v.split(""));
let cnt = 0;

for (let i = 0; i < list.length; i++) {
  for (let j = 0; j < list[i].length; j++) {
    if (list[i][j] === "I") {
      dfs(i, j);
    }
  }
}

function dfs(i, j) {
  if (list[i][j] === "P") {
    cnt++;
  }
  list[i][j] = "X";

  if (
    (list[i - 1] && list[i - 1][j] === "O") || //
    (list[i - 1] && list[i - 1][j] === "P")
  ) {
    dfs(i - 1, j);
  }
  if (
    (list[i + 1] && list[i + 1][j] === "O") || //
    (list[i + 1] && list[i + 1][j] === "P")
  ) {
    dfs(i + 1, j);
  }
  if (list[i][j - 1] === "O" || list[i][j - 1] === "P") {
    dfs(i, j - 1);
  }
  if (list[i][j + 1] === "O" || list[i][j + 1] === "P") {
    dfs(i, j + 1);
  }
}

console.log(cnt ? cnt : "TT");
