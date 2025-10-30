// 구간 합 구하기2 11659
let fs = require("fs");
let [NM, tar, ...probs] = fs.readFileSync("input.txt").toString().trim().split("\n");

const [N, M] = NM.split(" ").map(Number);
const accArr = [];
tar = tar
  .split(" ")
  .map(Number)
  .reduce((acc, cur) => {
    if (acc === 0) {
      accArr.push([cur, cur]);
      return acc + cur;
    }
    let add = acc + cur;
    accArr.push([add, cur]);
    return acc + cur;
  }, 0);
console.log(accArr);

let ans = "";
for (let prob of probs) {
  const [i, j] = prob.split(" ");
  console.log(accArr[j - 1], accArr[i - 1]);
  if (i === 1) {
    ans += accArr[j - 1][0] + "\n";
  } else {
    ans += accArr[j - 1][0] - accArr[i - 1][0] + accArr[i - 1][1] + "\n";
  }
}
console.log(ans.trim());
