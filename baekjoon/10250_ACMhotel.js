// 10250 ACMHotel
let fs = require("fs");
let [tcNum, ...tcs] = fs.readFileSync("input.txt").toString().trim().split("\n");

let ans = "";
for (let i = 0; i < tcNum; i++) {
  let [h, w, n] = tcs[i].split(" ").map(Number);
  const yy = (n % h === 0 ? h : n % h).toString();
  const xx = Math.ceil(n / h)
    .toString()
    .padStart(2, "0");

  ans += `${yy}${xx}` + "\n";
}
console.log(ans);
