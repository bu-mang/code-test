// 연결 요소의 갯수 11724
let fs = require("fs");
let [meta, ...list] = fs.readFileSync("input.txt").toString().trim().split("\n");

const spl = list
  .join(" ")
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b)
  .join(" ");
console.log(spl);
