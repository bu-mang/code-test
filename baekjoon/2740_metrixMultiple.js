//2740 행렬 곱셈
let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

let tcs = [];

for (let i = 0; i < input.length; i++) {
  const [Y, X] = input[i].split(" ").map(Number);

  let j;
  const tempArr = [];

  for (j = i + 1; j <= i + Y; j++) {
    const spl = input[j].split(" ");
    tempArr.push(spl);
  }
  tempArr.push([Y, X]);
  tcs.push(tempArr);
  i = j - 1;
}

console.log(tcs);

const [A, B] = tcs;

const [AY, AX] = A.pop();
const [BY, BX] = B.pop();

for (let i = 0; i < AY; i++) {
  const AYrow = [];
  for (let j = 0; j < BX; j++) {
    let temp = 0;
    for (let k = 0; k < BY; k++) {
      temp += +A[i][k] * +B[k][j];
    }
    AYrow.push(temp);
  }

  console.log(AYrow.join(" "));
}
