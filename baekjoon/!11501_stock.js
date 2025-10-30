//11501 주식
// 메모리 사용량 실패
let fs = require("fs");
let [n, ...arr] = fs.readFileSync("input.txt").toString().trim().split("\n");

for (let i = 0; i < arr.length; i++) {
  if (i % 2 === 0) continue;

  let list = arr[i].split(" ").map((x) => +x);
  let sum = 0;
  let index = 0;

  while (list.length !== 0) {
    const max = Math.max(...list);
    index = list.findIndex((item) => item === max);

    for (let j = 0; j <= index; j++) {
      sum += max - list[j];
    }

    for (let j = 0; j <= index; j++) {
      list.shift();
    }
  }

  console.log(sum);
}

// for (let i = 0; i < arr.length; i++) {
//   if (i % 2 === 0) continue;

//   let list = arr[i].split(" ").map((x) => +x);
//   let sum = 0;

//   while (list.length !== 0) {
//     const max = Math.max(...list);
//     const index = list.findIndex((item) => item === max);
//     const sliced = list.slice(0, index + 1);
//     const rest = list.slice(index + 1);

//     if (sliced.length === 1) break;
//     const reduced = sliced.reduce((acc, cur) => acc + max - cur, 0);
//     sum += reduced;
//     list = rest;
//   }

//   console.log(sum);
// }
