let fs = require("fs");
let [total, soldiers] = fs.readFileSync("input.txt").toString().trim().split("\n");
soldiers = soldiers.split(" ").map(Number);

for (let i = 0; i < +total - 1; i++) {
  if (soldiers[i] < soldiers[i + 1]) {
    soldiers[i] = "x";
  }
}
const left = soldiers.filter((v) => v === "x").length;
console.log(left);
