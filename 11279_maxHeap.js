// 최대힙 11279
let fs = require("fs");
let [amount, ...list] = fs.readFileSync("input.txt").toString().trim().split("\n");

const heap = [];
for (let i = 0; i < amount; i++) {
  if (list[i] !== 0) {
    heap.push(list[i]);
  } else if (list[i] === 0) {
    heap.push(list[i]);
  }
}
