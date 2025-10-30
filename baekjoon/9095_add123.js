// 9095 1,2,3 더하기
let fs = require("fs");
let [t, ...num] = fs.readFileSync("input.txt").toString().trim().split("\n").map(Number);

let res = "";
for (tar of num) {
  let cur = 0;
  let ans = 0;

  function dfs(cur) {
    if (cur === tar) {
      ans++;
      return;
    } else if (cur > tar) {
      return;
    }

    for (item of [1, 2, 3]) {
      dfs(cur + item);
    }
  }
  dfs(cur);
  res += ans + "\n";
}
console.log(res);
