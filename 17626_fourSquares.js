// 17626 Four Squares
let fs = require("fs");
let input = +fs.readFileSync("input.txt").toString().trim();

const temp = [];
let min = 100_000;
let sub;

dfs(input, temp);
function dfs(left, temp) {
  const sqrt = parseInt(Math.sqrt(left));
  if (left === 0) {
    if (temp.length < min) {
      min = temp.length;
    }
    return;
  } else if (temp.length >= min) {
    return;
  }

  for (let i = sqrt; i > sqrt / 2; i--) {
    const sqre = i ** 2;
    if (left - sqre >= 0) {
      sub = left - sqre;
    } else {
      continue;
    }
    if (temp[temp.length - 1] >= i || temp.length === 0) {
      temp.push(i);
      // console.log("left", left, "i", i, "temp", temp);
      dfs(sub, temp);
      temp.pop();
    }
  }
}
console.log(min);
