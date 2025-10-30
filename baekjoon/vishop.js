let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim();

const rowLength = BigInt(input);
const res = rowLength * 2n - 2n;
if (input === "1") {
  console.log("1");
} else {
  console.log(res.toString());
}
