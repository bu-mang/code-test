let fs = require("fs");
let [N, M] = fs.readFileSync("input.txt").toString().trim().split(" ").map(Number);

let ans = "";

if (N === 1) N = 2;
for (let i = N; i <= M; i++) {
  let flag = false;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      flag = true;
      break;
    }
  }

  if (!flag) {
    //flag가 false면
    ans += i + "\n";
  }
}

console.log(ans);
