// 듣보잡 1764
let fs = require("fs");
let [nums, ...list] = fs.readFileSync("input.txt").toString().trim().split("\n");

const obj = {};
list.forEach((v) => (obj[v] ? (obj[v] += 1) : (obj[v] = 1)));

console.log(obj);
let result = [];
for (item in obj) {
  if (obj[item] === 2) {
    result.push(item);
  }
}
console.log(result.length);
console.log(result.sort().join("\n"));
