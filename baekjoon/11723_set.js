// 집합 11723
let fs = require("fs");
let [n, ...commands] = fs.readFileSync("input.txt").toString().trim().split("\n");

let set = new Set();

for (let i = 0; i < +n; i++) {
  const [comm, target] = commands[i].split(" ");

  if (comm === "add") {
    set.add(target);
  } else if (comm === "check") {
    set.has(target) ? console.log(1) : console.log(0);
  } else if (comm === "remove") {
    set.delete(target);
  } else if (comm === "toggle") {
    const condition = set.has(target);
    if (condition) {
      set.delete(target);
    } else {
      set.add(target);
    }
  } else if (comm === "all") {
    for (let i = 1; i <= 20; i++) {
      set.add(i.toString());
    }
    console.log(">", set);
  } else if (comm === "empty") {
    set.clear();
  }
}
