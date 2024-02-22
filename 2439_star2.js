// 2439 별찍기2
let fs = require("fs");
let n = Number(fs.readFileSync("input.txt").toString().trim());

let result = "";

for (let i = n - 1; i >= 0; i--) {
  const spaces = " ".repeat(i);
  const stars = "*".repeat(n - i);
  result += spaces + stars + "\n";
}

console.log(result);
