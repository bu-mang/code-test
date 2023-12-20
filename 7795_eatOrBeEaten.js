// 7795 먹을 것인가 먹힐 것인가
let fs = require("fs");
let [tcNum, ...tcs] = fs.readFileSync("input.txt").toString().trim().split("\n");

const sliced = [];
for (let i = 0; i < tcNum; i++) {
  sliced.push(tcs.slice(0 + 3 * i, 3 + 3 * i));
}

for (el of sliced) {
  let [ab, a, b] = el;
  a = a.split(" ").map(Number);
  b = b.split(" ").map(Number);

  let maxB = Math.max(...b);
  let minB = Math.min(...b);
  let cnt = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] <= minB) continue;
    if (a[i] > maxB) {
      cnt += b.length;
      continue;
    }
    for (let j = 0; j < b.length; j++) {
      if (a[i] > b[j]) {
        cnt++;
      }
    }
  }
  console.log(cnt);
}
// let idx = 0;
// for (let i = 0; i < tcNum; i++) {
//   let a;
//   let b;
//   let cnt = 0;

//   for (j = idx; j < idx + 3; j++) {
//     if (j % 3 === 0) {
//       continue;
//     } else if (j % 3 === 1) {
//       a = tcs[j].split(" ").map(Number);
//     } else {
//       b = tcs[j].split(" ").map(Number);
//     }
//   }
//   idx = j;
//   const minB = Math.min(...b);

//   for (let k = 0; k < a.length; k++) {
//     if (a[k] <= minB) continue;
//     cnt += b.filter((v) => v < a[k]).length;
//   }

//   console.log(cnt);
// }

// for (let i = 0; i < tcNum; i++) {
//   let a;
//   let b;
//   let cnt = 0;

//   for (let j = 0; j < 3; j++) {
//     if (j === 0) {
//       continue;
//     } else if (j % 2 === 0) {
//       b = tcs[j].split(" ").map(Number);
//     } else {
//       a = tcs[j].split(" ").map(Number);
//     }
//   }
//   tcs = tcs.slice(3);

//   for (let k = 0; k < a.length; k++) {
//     for (let l = 0; l < b.length; l++) {
//       if (a[k] > b[l]) cnt++;
//     }
//   }

//   console.log(cnt);
// }

// let fs = require("fs");
// let [tcNum, ...tcs] = fs.readFileSync("input.txt").toString().trim().split("\n");

// for (let i = 0; i < tcNum; i++) {
//   let a;
//   let b;

//   for (let j = 0; j < 3; j++) {
//     if (j === 0) {
//       continue;
//     } else if (j % 2 === 0) {
//       b = tcs[j].split(" ").map(Number);
//     } else {
//       a = tcs[j].split(" ").map(Number);
//     }
//   }
//   tcs = tcs.slice(3);

//   let combination = a.map((v) => b.map((x) => [v, x]));
//   combination = combination.flat().filter((v) => {
//     let [n, m] = v;
//     return n > m;
//   });

//   console.log(combination.length);
// }
