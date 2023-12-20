// 스택 10828
let fs = require("fs");
let [amount, ...orders] = fs.readFileSync("input.txt").toString().trim().split("\n");

let stack = [];
let ans = "";

for (let order of orders) {
  let spl = order.split(" ");
  if (spl[0] === "push") {
    stack.push(+spl[1]);
  } else if (spl[0] === "pop") {
    let popped = stack.pop();
    if (popped) {
      ans += popped + "\n";
    } else {
      ans += "-1" + "\n";
    }
  } else if (spl[0] === "size") {
    ans += stack.length + "\n";
  } else if (spl[0] === "empty") {
    if (stack.length) {
      ans += 0 + "\n";
    } else {
      ans += 1 + "\n";
    }
  } else if (spl[0] === "top") {
    if (stack.length) {
      ans += stack[stack.length - 1] + "\n";
    } else {
      ans += -1 + "\n";
    }
  }
}
console.log(ans.trim());
