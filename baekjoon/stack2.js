let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n")[0];

const stack = [];
let cnt = 0;

const replaced = input.replaceAll("()", "_");

for (let i = 0; i < replaced.length; i++) {
  if (replaced[i] === "_") {
    cnt += stack.length;
  } else if (replaced[i] === "(") {
    stack.push(replaced[i]);
  } else {
    stack.pop();
    cnt++;
  }
}
console.log(cnt);
