// 2447 별찍기 10
const fs = require("fs");
let origin = Number(fs.readFileSync("input.txt").toString());

let arr = new Array(origin).fill().map((v) => {
  let temp = [];
  for (let i = 0; i < origin; i++) {
    temp.push("*");
  }
  return temp;
});

function marker(input) {
  if (input === 1) return;
  let divn = input / 3;
  let divn2 = (input / 3) * 2;

  let accessible = new Array(origin).fill().map((v) => (v = 1));

  if (input > 3) {
    for (let a = input / 9; a < origin; a += input / 3) {
      for (let b = 0; b < input / 9; b++) {
        accessible[a + b] = 0;
      }
    }
  }

  for (let i = 0; i < origin; i++) {
    for (let j = 0; j < origin; j++) {
      if (i % 3 === 1 && j % 3 === 1) {
        arr[i][j] = " ";
      }
      if (divn <= i && i < divn2 && divn <= j && j < divn2) {
        arr[i][j] = " ";
      }
      if (!accessible[i] && !accessible[j]) {
        arr[i][j] = " ";
      }
    }
  }
  marker(divn);
}
marker(origin);

for (let k = 0; k < origin; k++) {
  arr[k] = arr[k].join("");
}
arr = arr.join("\n");
console.log(arr);

// let ans = "*";
// let blank = " ";

// function marker(turn, ans, blank) {
//   if (turn === 1) {
//     return ans;
//   }

//   let result = [[], [], []];

//   for (let i = 0; i < 3; i++) {
//     if (i === 0) {
//       result[0].push(ans, ans, ans);
//     } else if (i === 1) {
//       result[1].push(ans, blank, ans);
//     } else {
//       result[2].push(ans, ans, ans);
//     }
//   }
//   console.log("turn: ", turn, result);

//   let temp = "";
//   let tempBlank = "";
//   for (let j = 0; j < 3; j++) {
//     temp = temp + result[j].join("") + "\n";
//     tempBlank = tempBlank + blank.repeat(3) + "\n";
//   }

//   turn /= 3;
//   ans = temp.trim();
//   blank = tempBlank;
//   // console.log(turn, "!");
//   // console.log(ans, "!");
//   // console.log(tempBlank, "!");
//   return marker(turn, ans, blank);
// }
// marker(9, ans, blank);

/*



















*/

// const num = parseInt(input[0]);

// const lines = [];

// printStars(num);
// console.log(lines.join(""));

// function printStars(num) {
//   for (let i = 0; i < num; i++) {
//     for (let j = 0; j < num; j++) {
//       star(i, j, num);
//     }
//     lines.push("\n");
//   }
// }

// function star(i, j, num) {
//   if (i % 3 == 1 && j % 3 == 1) {
//     // (1,1), (1,4), (1,7)...
//     lines.push(" ");
//   } else {
//     if (num == 1) {
//       lines.push("*");
//     } else {
//       // (3,3) = (1,1)이 되고,
//       // (3,4) = (1,1)이 된다.
//       // (9,9), (27,27)도 동일한 방식으로 재귀 호출된다.
//       star(parseInt(i / 3), parseInt(j / 3), parseInt(num / 3));
//     }
//   }
// }
