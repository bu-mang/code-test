// 2445 별찍기8
let fs = require("fs");
let n = Number(fs.readFileSync("input.txt").toString().trim());

let dots = 2;
const max = 2 * n;

function starMarker(dots, max) {
  if (dots < max) {
    let temp = "";
    for (let i = 0, j = dots / 2; i < max - dots / 2; i++, j--) {
      if (j > 0) {
        temp += "*";
      } else {
        temp += " ";
      }
    }
    temp += "*".repeat(dots / 2);
    return temp + "\n" + starMarker(dots + 2, max);
  } else {
    return "*".repeat(max);
  }
}

let upper = starMarker(2, max).split("\n");
let bottom = upper.slice(0, -1).reverse();
const intg = [...upper, ...bottom].join("\n");
console.log(intg);

// *        *
// **      **
// ***    ***
// ****  ****
// **********
// ****  ****
// ***    ***
// **      **
// *        *
