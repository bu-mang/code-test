// 17219 비밀번호 찾기
let fs = require("fs");
let [nums, ...list] = fs.readFileSync("input.txt").toString().trim().split("\n");

const [total, tar] = nums.split(" ").map(Number);

const totalList = list.slice(0, total);
const targetList = list.slice(total);

const memo = {};
for (item of totalList) {
  const [site, pw] = item.split(" ");
  memo[site] = pw;
}

let res = "";
for (item of targetList) {
  res += memo[item] + "\n";
}

console.log(res.trim());
