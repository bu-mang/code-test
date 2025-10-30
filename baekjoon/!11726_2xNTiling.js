// 연결 요소의 갯수 11724
let fs = require("fs");
let input = +fs.readFileSync("input.txt").toString().trim();

const countCases = (input) => {
  let result = 0;

  const divn = parseInt(input / 2);

  for (let i = divn; i > 0; i--) {
    const leftUnit = input - i * 2;
    if (!leftUnit) result++;
    const blocks = leftUnit + i;
  }

  return 1 + result;
};

console.log(countCases(input));
