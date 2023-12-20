// 5648 역원소 정렬
let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

const arr = [];
for (let i = 0; i < input.length; i++) {
  const spl = input[i].split(" ");
  for (let j = 0; j < spl.length; j++) {
    if (i === 0 && j === 0) continue;
    let reversed = parseInt(spl[j].split("").reverse().join(""));
    if (reversed <= 10 ** 12) {
      arr.push(reversed);
    }
  }
}

arr.sort((a, b) => a - b).forEach((v) => console.log(v));
