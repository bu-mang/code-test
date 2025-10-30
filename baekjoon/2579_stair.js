// 2579 계단오르기
let fs = require("fs");
let [n, ...arr] = fs.readFileSync("input.txt").toString().trim().split("\n").map(Number);

const N = +n;
const stairs = arr.map((v) => +v);
let dp = [
  [0, 0],
  [stairs[0], stairs[0]],
];
// [i][0] 아래 계단 안 밟았을 떄,
// [i][1] 아래 계단 밟았을 때

for (let i = 2; i <= stairs.length; i++) {
  console.log(dp, "i", i);
  dp.push([]);
  dp[i][0] = Math.max(dp[i - 2][1], dp[i - 2][0]) + stairs[i - 1];
  dp[i][1] = dp[i - 1][0] + stairs[i - 1];
}

console.log(Math.max(...dp[dp.length - 1]));

// let max = 0;
// let i = stairNum - 1;
// let acc = stairs[i];
// const history = [i];
// function dfs(st, acc) {
//   if (st === 1) {
//     if ((history[history.length - 2] = 2)) {
//       max = acc;
//       return;
//     } else {
//       st = st - 1;
//       acc += stairs[st];
//       history.push(st);
//       max = acc;
//       return;
//     }
//   } else if (st === 0) {
//     max = acc;
//     return;
//   }
//   if (st === history[history.length - 2] - 1) {
//     st = st - 2;
//     acc += stairs[st];
//     history.push(st);

//     dfs(st, acc);

//     history.pop();
//     acc -= stairs[st];
//     st = st + 2;
//   } else if (stairs[st - 1] > stairs[st - 2]) {
//     st = st - 1;
//     acc += stairs[st];
//     history.push(st);

//     dfs(st, acc);

//     history.pop();
//     acc -= stairs[st];
//     st = st + 1;
//   } else {
//     st = st - 2;
//     acc += stairs[st];
//     history.push(st);

//     dfs(st, acc);

//     history.pop();
//     acc -= stairs[st];
//     st = st + 2;
//   }
// }
// dfs(i, acc);
// console.log(max);

// let max = 0;
// let history = [];
// function dfs(i, acc) {
//   if (history.length > 2 && history[history.length - 1] === history[history.length - 2] + 1 && history[history.length - 2] === history[history.length - 3] + 1) {
//     console.log("relayed 3 times", "\n");
//     return;
//   } else if (i === stairNum) {
//     if (acc > max) {
//       console.log("\n", "acc", acc, "his", history, "\n");
//       max = acc;
//     }
//     return;
//   }
//   for (let item of [1, 2]) {
//     i += item;
//     acc += stairs[i - 1];
//     history.push(i);
//     console.log("before dfs", "i", i, "acc", acc, "history", history);
//     dfs(i, acc);
//     if (i === stairNum) {
//       history.pop();
//       break;
//     }
//     acc -= stairs[i - 1];
//     i -= item;
//     history.pop();
//     console.log("after dfs", "i", i, "acc", acc, "history", history);
//   }
// }

// dfs(0, 0);
// console.log(max);

// 맨 위 계단 전의 2개의 계단에서
// 무조건 (4)번을 밟는게 좋다.
// 무조건 (4)번이 좋다는 것을 파악하고
// 무조건 (4)번이 아니라면 탈락한다.

// 이렇게 하려면 거꾸로 풀어야하나?

// okay (8)
// 4
// 1
// 2
// 4
// 3

// okay(86)
// 6
// 40
// 40
// 20
// 1
// 20
// 5

// okay (66)
// 6
// 10
// 7
// 6
// 5
// 30
// 20

// okay(17)
// 6
// 1
// 3
// 5
// 7
// 9
// 0

//전계단에서 올라온 경우
//전전계단에서 올라온 경우
