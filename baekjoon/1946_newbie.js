// 신입 사원 1946
let fs = require("fs");
let [tcn, ...input] = fs.readFileSync("input.txt").toString().trim().split("\n");

const tcs = [];
let temp = [];

for (item of input) {
  spl = item.split(" ")?.map(Number);
  if (spl.length > 1) {
    temp.push(spl);
  } else {
    if (temp.length) {
      tcs.push(temp);
    }
    temp = [];
  }
}
tcs.push(temp);
temp = [];
// console.log(tcs);

let res = "";
for (tc of tcs) {
  tc.sort((prev, cur) => prev[0] - cur[0]);
  console.log(tc);
  let cutline = tc.length;
  let tcCnt = 0;

  for (let i = 0; i < tc.length; i++) {
    if (i === 0) {
      cutline = tc[i][1];
      tcCnt++;
    } else {
      if (tc[i][1] < cutline) {
        cutline = tc[i][1];
        tcCnt++;
      }
    }
  }
  res = res + tcCnt + "\n";
}
console.log(res);
