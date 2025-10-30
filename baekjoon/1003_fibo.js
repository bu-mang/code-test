// 1003 피보나치 함수
let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n").map(Number);

const memo = [0, 1];
for (let i = 1; i <= input[0]; i++) {
  function fibonacci(n) {
    function recur(n) {
      if (n === 0 || n === 1) {
        return n;
      } else if (memo[n] !== undefined) {
        return memo[n];
      } else {
        memo[n] = recur(n - 1) + recur(n - 2);
        return memo[n];
      }
    }
    recur(n);
    return n === 0 ? `1 0` : `${memo[n - 1]} ${memo[n]}`;
  }
  console.log(`${fibonacci(input[i])}`);
}
