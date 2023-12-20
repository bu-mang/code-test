// 2577 숫자의 개수
let fs = require("fs");
let input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number)
  .reduce((a, b) => a * b);

input = (input + "").split("");
let obj = {};

for (item of input) {
  obj[item] ? (obj[item] += 1) : (obj[item] = 1);
}

for (let i = 0; i < 10; i++) {
  console.log(obj[i] ? obj[i] : 0);
}
