// 2444 별 찍기 7
let fs = require("fs");
let n = Number(fs.readFileSync("input.txt").toString().trim());

let max = 2 * n - 1;

function starMarker(dots, max) {
  if (dots === max) {
    return "*".repeat(max);
  } else {
    let halfSpaces = (max - dots) / 2;
    return " ".repeat(halfSpaces) + "*".repeat(dots) + "\n" + starMarker(dots + 2, max);
  }
}

let upper = starMarker(1, max).split("\n");
let bottom = upper.slice(0, -1).reverse();
const intg = [...upper, ...bottom].join("\n");
console.log(intg);
