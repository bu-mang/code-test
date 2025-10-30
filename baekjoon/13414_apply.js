// 13414 수강신청
let fs = require("fs");
let [meta, ...students] = fs.readFileSync("input.txt").toString().trim().split("\n");

let [ableNum, queuedNum] = meta.split(" ").map(Number);
const indexTable = {};
const res = [];

for (let i = 0; i < queuedNum; i++) {
  indexTable[students[i]] = i;
}

const keys = Object.keys(indexTable);
const vals = Object.values(indexTable);
for (let i = 0; i < queuedNum; i++) {
  res.push([keys[i], vals[i]]);
}
res.sort((prev, cur) => prev[1] - cur[1]);

let ans = "";
for (let i = 0; i < ableNum; i++) {
  if (res[i][0] === undefined) break;
  ans += res[i][0] + "\n";
}
console.log(ans.trim());
