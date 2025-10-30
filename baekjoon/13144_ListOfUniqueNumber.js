let fs = require("fs");
let [num, args] = fs.readFileSync("input.txt").toString().trim().split("\n");
args = args.split(" ").map(Number);

let cnt = 0;
for (let s = 0; s < num; s++) {
  let e;
  for (e = s; e < num; e++) {
    if (s === e) {
      continue;
    } else if (args[s] === args[e]) {
      break;
    }
  }
  cnt += e - s;
}
console.log(cnt);
