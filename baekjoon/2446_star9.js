// 2446 별찍기9
let fs = require("fs");
let n = Number(fs.readFileSync("input.txt").toString().trim());

let dots = 2 * n - 1;
const max = 2 * n - 1;

function starMarker(dots, max) {
  if (dots < 0) {
    return "";
  } else if (dots === max) {
    return "*".repeat(dots) + "\n" + starMarker(dots - 2, max);
  } else {
    let spaces = max - dots;
    let original = "*".repeat(max);
    for (let i = 0; i < spaces; i++) {
      if (i % 2 === 0) {
        original = original.replace("*", " ");
      } else {
        original = original.slice(0, -1);
      }
    }
    return original + "\n" + starMarker(dots - 2, max);
  }
}

const halfUp = starMarker(dots, max).split("\n").slice(0, -1);
const halfBtm = halfUp.slice(0, -1).reverse();
const intergrated = [...halfUp, ...halfBtm];
intergrated.forEach((x) => console.log(x));
