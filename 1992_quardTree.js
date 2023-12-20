// 1992 쿼드트리
let [num, ...datas] = require("fs").readFileSync("input.txt").toString().trim().split("\n");
let leng = Number(num);

function quard(leng, datas) {
  if (leng === 1) {
    return Number(datas);
  }
  const divn = leng / 2;

  let leftUp = datas.slice(0, divn).map((x) => x.slice(0, divn));
  let rightUp = datas.slice(0, divn).map((x) => x.slice(divn));
  let leftDown = datas.slice(divn).map((x) => x.slice(0, divn));
  let rightDown = datas.slice(divn).map((x) => x.slice(divn));

  if (divn === 1) {
    const v = Number(leftUp) + Number(rightUp) + Number(leftDown) + Number(rightDown);
    if (!v) {
      return 0;
    } else if (v === 4) {
      return 1;
    } else {
      return `(${datas.join("")})`;
    }
  }

  const LUSUM = leftUp.join("");
  if (!LUSUM.includes("1")) {
    leftUp = 0;
  } else if (!LUSUM.includes("0")) {
    leftUp = 1;
  } else {
    leftUp = quard(divn, leftUp);
  }

  const RUSUM = rightUp.join("");
  if (!RUSUM.includes("1")) {
    rightUp = 0;
  } else if (!RUSUM.includes("0")) {
    rightUp = 1;
  } else {
    rightUp = quard(divn, rightUp);
  }

  const LDSUM = leftDown.join("");
  if (!LDSUM.includes(1)) {
    leftDown = 0;
  } else if (!LDSUM.includes(0)) {
    leftDown = 1;
  } else {
    leftDown = quard(divn, leftDown);
  }

  const RDSUM = rightDown.join("");
  if (!RDSUM.includes(1)) {
    rightDown = 0;
  } else if (!RDSUM.includes(0)) {
    rightDown = 1;
  } else {
    rightDown = quard(divn, rightDown);
  }

  let sum = leftUp + leftDown + rightUp + rightDown;
  return sum === 0 ? 0 : sum === 4 ? 1 : `(${leftUp}${rightUp}${leftDown}${rightDown})`;
}
console.log(quard(leng, datas));

/*














*/

// 어찌저찌 해도 8개밖에 커버를 못함
// let visited = new Array(num).fill().map((x) => (x = new Array(num).fill(0)));
// let combinationCheck = [];
// let table = [];
// datas = datas.map((x) => x.split("").map(Number));

// for (let i = 0; i < num; i++) {
//   for (let j = 0; j < num; j++) {
//     quardSearch(i, j, visited);
//   }
// }
// console.log(table);

// function quardSearch(i, j, visited) {
//   if (!visited[i][j]) {
//     visited[i][j] = 1;
//     combinationCheck.push(datas[i][j]);
//   } else {
//     return;
//   }

//   if (combinationCheck.length === 1) quardSearch(i, j + 1, visited);
//   else if (combinationCheck.length === 2) quardSearch(i + 1, j, visited);
//   else if (combinationCheck.length === 3) quardSearch(i, j - 1, visited);
//   else if (combinationCheck.length === 4) {
//     if (!combinationCheck.reduce((a, b) => a + b, 0)) {
//       table.push("0");
//     } else if (combinationCheck.reduce((a, b) => a + b, 0) === 4) {
//       table.push("1");
//     } else {
//       table.push(`${combinationCheck[0]}${combinationCheck[1]}${combinationCheck[3]}${combinationCheck[2]}`);
//     }

//     combinationCheck = [];
//     // 1. 다 0인지 체크 -> 맞으면 0을 push
//     // 2. 다 1인지 체크 -> 맞으면 1을 push
//     // 3. 섞여있는지 체크 -> 섞여있으면 (xxxx)을 push
//     // 4. combinationcheck 초기화
//   }
// }

/*














*/

// const n = +input[0];
// const screen = input.slice(1).map((v) => v.split("").map((vv) => +vv));
// console.log(input, "input");

// console.log(n, "n");
// console.log(screen, "screen");

// const genQuadTree = (n) => {
//   const quadTree = [];
//   const recursion = (n, x, y) => {
//     let total = 0;
//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < n; j++) {
//         total += screen[y + j][x + i];
//       }
//     }
//     if (total === 0) quadTree.push("0");
//     else if (total === n * n) quadTree.push("1");
//     else {
//       n /= 2;
//       quadTree.push("(");
//       recursion(n, x, y);
//       recursion(n, x + n, y);
//       recursion(n, x, y + n);
//       recursion(n, x + n, y + n);
//       quadTree.push(")");
//     }
//   };
//   recursion(n, 0, 0);
//   console.log(quadTree.join(""));
// };

// genQuadTree(n);
// if ([]) console.log(1);
// let totalLeng = +leng;
// const result = [];

// function quardTree(totalLeng, processed, result) {
//   if (totalLeng / 2 < 1) {
//     // 종료 조건
//     return processed;
//   }

//   // 1. 기준을 쪼갠다.
//   const divder = totalLeng / 2;

//   let upsideLeft = [];
//   let upsideRight = [];
//   let downsideLeft = [];
//   let downsideRight = [];

//   // 2. 영역을 분할한다.
//   processed.slice(0, divder).forEach((item) => {
//     upsideLeft.push(item.slice(0, divder));
//     upsideRight.push(item.slice(divder));
//   });
//   processed.slice(divder).forEach((item) => {
//     downsideLeft.push(item.slice(0, divder));
//     downsideRight.push(item.slice(divder));
//   });

//   // 3. 0과 1이 안 섞였는지 검사해서 result에 넣는다. 0과 1이 섞였다면 재귀 실행
//   upsideLeft.forEach((item) => {
//     if (item.includes("0") && item.includes("1")) {
//       console.log("혼재", item);
//     } else {
//       console.log("단일", item);
//     }
//   });
//   upsideRight.forEach((item) => {
//     if (item.includes("0") && item.includes("1")) {
//       console.log("혼재", item);
//     } else {
//       console.log("단일", item);
//     }
//   });
//   downsideLeft.forEach((item) => {
//     if (item.includes("0") && item.includes("1")) {
//       console.log("혼재", item);
//     } else {
//       console.log("단일", item);
//     }
//   });
//   downsideRight.forEach((item) => {
//     if (item.includes("0") && item.includes("1")) {
//       console.log("혼재", item);
//     } else {
//       console.log("단일", item);
//     }
//   });

//   // processed = [upsideLeft, upsideRight, downsideLeft, downsideRight];

//   // return quardTree(divder / 2, processed, result);
// }

// console.log("RETURN", quardTree(totalLeng, quard));
