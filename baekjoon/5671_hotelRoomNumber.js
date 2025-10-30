// 5671 호텔룸넘버
let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  const [start, end] = input[i].split(" ").map(Number);
  let count = 0;

  for (let target = start; target <= end; target++) {
    const spl = target.toString().split("");
    const delJointed = [...new Set(spl)];
    if (spl.length === delJointed.length) count++;
  }

  console.log(count);
}
