// 4949 균형잡힌 세상
let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

input.pop();
const res = [];
// 문제풀이 아이디어
// "(", "["는 stack에 쌓고
// ")", "]"에 없앤다.
// 만약 "("인데 "]"이 나오거나 "["인데 ")"이 나오면 바로 no처리
// 마지막 글자가 온점이 아니면 no 처리한다.

// console.log(input);

for (let i = 0; i < input.length; i++) {
  const stack = [];
  const line = input[i];
  let flag = false;
  for (let j = 0; j < line.length; j++) {
    if (line[j] === "(") {
      stack.push("(");
    } else if (line[j] === "[") {
      stack.push("[");
    } else if (line[j] === ")") {
      if (stack[stack.length - 1] !== "(") {
        res.push("no");

        flag = true;
        break;
      } else {
        stack.pop();
      }
    } else if (line[j] === "]") {
      if (stack[stack.length - 1] !== "[") {
        res.push("no");

        flag = true;
        break;
      } else {
        stack.pop();
      }
    }
  }

  if (flag) continue;

  if (stack.length) {
    res.push("no");
  } else {
    res.push("yes");
  }
}

console.log(res.join("\n"));
