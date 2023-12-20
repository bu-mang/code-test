// 11729 하노이 탑 이동 순서
let fs = require("fs");
let N = +fs.readFileSync("input.txt").toString().split("\n");

const answer = [];
let cnt = 0;

function hanoiTower(num, from, middle, to) {
  if (num === 0) {
    return;
  } else {
    hanoiTower(num - 1, from, to, middle);
    answer.push(from + " " + to);
    cnt++;
    hanoiTower(num - 1, middle, from, to);
  }
}

hanoiTower(N, "1", "2", "3");
console.log(cnt);
console.log(answer.join("\n"));

/*
















*/
// let tower = [[], [], []];

// let trials = 0;
// let min = 10000;
// const path = [];
// const result = [];

// for (let i = totalNum; i > 0; i--) {
//   tower[0].push(i);
// }

// function dfs() {
//   if (tower[2].length === totalNum && trials < min) {
//     min = trials;
//     result = [trials, ...path];
//     result.forEach((x) => console.log(x));
//     return;
//   }
//   for (let j = 0; j < 3; j++) {
//     if (tower[j].length) {
//       let text = j;
//       let left = tower[j].pop();
//       console.log(path);

//       for (let k = 0; k < 3; k++) {
//         if (j === k) continue;
//         if (tower[k][tower[k].length - 1] < left) continue;
//         if (tower[k].length === 0 || tower[k][tower[k].length - 1] > left) {
//           tower[k].push(left);
//           text += " " + k;
//           path.push(text);
//           trials++;
//           dfs();
//           trials--;
//           path.pop();
//           tower[j].push(tower[k].pop());
//         } else {
//           tower[j].push(left);
//         }
//       }
//     }
//   }
// }
// dfs();
