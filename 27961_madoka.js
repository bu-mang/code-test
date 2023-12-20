// 27961 고양이는 많을수록 좋다.
let fs = require("fs");
let goal = +fs.readFileSync("input.txt").toString();

let cnt = 0;
let cats = 0;
while (cats < goal) {
  if (cats === 0) {
    cats++;
    cnt++;
  } else {
    cats = cats * 2;
    cnt++;
  }
}
console.log(cnt);
