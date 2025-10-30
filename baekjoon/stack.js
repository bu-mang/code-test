let fs = require("fs");
let [totalNum, ...list] = fs.readFileSync("input.txt").toString().trim().split("\n");

let cnt = 0; // 카운터
for (let i = 0; i < list.length; i++) {
  let target = list[i];
  const stack = [];
  for (let j = 0; j < target.length; j++) {
    if (!stack.length) {
      stack.push(target[j]);
    } else if (stack[stack.length - 1] === target[j]) {
      stack.pop();
    } else {
      stack.push(target[j]);
    }
  }
  if (!stack.length) {
    cnt++;
  }
}
console.log(cnt);

/*
오답




let fs = require("fs");
let [totalNum, ...list] = fs.readFileSync("input.txt").toString().trim().split("\n");

// console.log(totalNum, list);
totalNum = Number(totalNum);

for (let i = 0; i < list.length; i++) {
  const spl = list[i].split("");
  let len = spl.length;
  let odd = 0;
  let even = 0;
  // console.log(spl);

  if (spl.length % 2 !== 0) {
    totalNum--;
    // console.log("!", totalNum);
    continue;
  }

  if (spl.length === 2 && spl[spl.length - 1] !== spl[spl.length - 2]) {
    totalNum--;
    continue;
  }

  for (let y = 0; y < len; y++) {
    if (odd === 0 && spl[spl.length - 1] === spl[spl.length - 2]) {
      // console.log(1, spl[spl.length - 1], spl[spl.length - 2], y);
      spl.pop();
      spl.pop();
    } else if (odd === 0 && spl[spl.length - 1] !== spl[spl.length - 2]) {
      // console.log(2, spl[spl.length - 1], spl[spl.length - 2], y);
      odd += 1;
      spl.pop();
    } else if (odd === 1 && spl[spl.length - 1] === spl[spl.length - 2]) {
      // console.log(3, spl[spl.length - 1], spl[spl.length - 2], y);
      even += 1;
      spl.pop();
    } else if (odd === 1 && even % 2 !== 0 && spl[spl.length - 1] !== spl[spl.length - 2]) {
      odd -= 1;
      even = 0;
      spl.pop();
      spl.pop();
      // console.log(4, spl[spl.length - 1], spl[spl.length - 2], y);
    } else {
      totalNum--;
      break;
    }
  }
}
console.log(totalNum);
*/
