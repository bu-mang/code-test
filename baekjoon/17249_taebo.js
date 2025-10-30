// 17219 비밀번호 찾기
let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim();

let [left, right] = input.split("(^0^)");

console.log(left.split("=").join("").length, right.split("=").join("").length);
