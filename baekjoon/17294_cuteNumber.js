// 귀여운 수 17294
let fs = require("fs");
let input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("")
  .map((x) => +x);

let diff;
let flag = true;
for (let i = 0; i < input.length; i++) {
  if (input.length <= 2) {
    break;
  } else if (input[i + 1] !== undefined) {
    let current = input[i];
    let next = input[i + 1];

    if (i === 0) {
      diff = current - next;
    } else {
      let temp = current - next;
      if (temp !== diff) {
        flag = false;
        console.log("흥칫뿡!! <(￣ ﹌ ￣)>");
        break;
      }
    }
  }
}

if (flag) {
  console.log("◝(⑅•ᴗ•⑅)◜..°♡ 뀌요미!!");
}
