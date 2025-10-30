// 2170 선 긋기
const fs = require("fs");
let [num, ...lines] = fs.readFileSync("input.txt").toString().trim().split("\n");

const arr = new Array();
num = +num;

for (let i = 0; i < num; i++) {
  let spl = lines[i].split(" ").map(Number);
  for (let j = spl[0]; j < spl[1] + 1; j++) {
    arr[j] = 1;
  }
}
console.log(arr);
let sum = arr.reduce((acc, rec) => acc + rec, 0);
console.log(sum);
