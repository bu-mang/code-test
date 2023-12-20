// 25186 infp
let fs = require("fs");
let [total, list] = fs.readFileSync("input.txt").toString().trim().split("\n");
list = list.split(" ").map(Number);
let sum = 0;
const max = Math.max(...list);
for (let i = 0; i < list.length; i++) {
  sum += list[i];
}
sum = sum - max;

if (+total === 1 && list.length === 1 && list[0] === 1) {
  console.log("Happy");
} else if (sum >= max) {
  console.log("Happy");
} else {
  console.log("Unhappy");
}
// if (total === "1" && list === "1" ) {
//   console.log("Unhappy")
// } else {

// }
