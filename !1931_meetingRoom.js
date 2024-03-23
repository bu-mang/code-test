// 회의실 배정 1931
let fs = require("fs");
let [n, ...arr] = fs.readFileSync("input.txt").toString().trim().split("\n");

let answer = 0;
const times = arr
  .map((num) => num.split(" ").map((num) => +num))
  .sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });

console.log(times);

let et = 0;
times.forEach((time) => {
  if (time[0] >= et) {
    answer++;
    et = time[1];
  }
});

console.log(answer);
