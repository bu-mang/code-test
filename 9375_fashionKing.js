//패션왕 신해빈 9375
let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

const tc = [];
for (let i = 1; i < input.length; i++) {
  const num = Number(input[i]);
  if (num >= 0) {
    const sli = input.slice(i + 1, i + 1 + num);
    tc.push(sli);
  }
}

for (clothes of tc) {
  const obj = {};
  clothes.forEach((item) => {
    const spl = item.split(" ");
    obj[spl[1]] ? obj[spl[1]]++ : (obj[spl[1]] = 1);
  });
  const vals = Object.values(obj);
  let multi = 0;
  multi = vals.reduce((acc, cur) => acc * (cur + 1), 1);
  console.log(multi - 1);
}
