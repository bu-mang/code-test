let fs = require("fs");
let [cond, args] = fs.readFileSync("input.txt").toString().trim().split("\n");

let [total, target] = cond.split(" ").map(Number);
args = args.split(" ").map(Number);

let cnt = 0;

for (let i = 0; i < args.length; i++) {
  let sum = 0;
  for (let j = i; j < args.length; j++) {
    sum += args[j];
    if (sum === target) {
      cnt++;
      break;
    } else if (sum > target) {
      break;
    }
  }
}
console.log(cnt);
