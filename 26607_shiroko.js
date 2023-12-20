// 25186 shiroko
let fs = require("fs");
let [total, ...candidates] = fs.readFileSync("input.txt").toString().trim().split("\n");

let [n, k, x] = total.split(" ").map(Number);
let visited = new Array(n).fill().map((v) => 0);
const picked = [];

let diff = null;
let result = 0;

function dfs(idx) {
  if (visited[idx]) return;
  if (picked.length === k) {
    let reduced;
    if (k === 1) {
      reduced = picked[0].split(" ").map(Number);
    } else {
      reduced = picked.reduce((a, b) => {
        a = a.split(" ").map(Number);
        b = b.split(" ").map(Number);
        return `${a[0] + b[0]} ${a[1] + b[1]}`;
      });
      reduced = reduced.split(" ").map(Number);
    }

    if (k === 1) {
      const newDiff = reduced[0] * reduced[1];
      if (diff === null) {
        result = reduced[0] * reduced[1];
      } else if (newDiff < diff) {
        result = reduced[0] * reduced[1];
        diff = newDiff;
      }
    } else {
      const newDiff = Math.abs(x - reduced[0]) + Math.abs(x - reduced[1]);
      if (diff === null) {
        result = reduced[0] * reduced[1];
        diff = newDiff;
      } else if (newDiff <= diff) {
        if (result < reduced[0] * reduced[1]) {
          result = reduced[0] * reduced[1];
          diff = newDiff;
        }
      }
      // if (picked[0] === "6 4" && picked[1] === "5 5" && picked[2] === "4 6") {
      //   console.log(result);
      // }
    }
    return;
  }

  for (let i = idx; i < candidates.length; i++) {
    if (visited[i]) continue;
    visited[i] = 1;
    picked.push(candidates[i]);
    dfs(i + 1);
    visited[i] = 0;
    picked.pop();
  }
}
dfs(0);

console.log(result);
