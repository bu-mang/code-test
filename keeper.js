let fs = require("fs");
let input = fs.readFileSync("input2.txt").toString().split("\n");

function measureDstc(i, j, type) {
  if (i < 0 || input.length < i || j < 0 || input[0].length < j) return;

  if (type === 1) {
    measureDstc(i, j + 1, type);
  } else if (type === 2) {
    measureDstc(i, j + 1, type);
  } else if (type === 3) {
  } else if (type === 4) {
  } else if (type === 5) {
  }
}
