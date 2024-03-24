// 1004 어린 왕자
let fs = require("fs");
let [n, ...tcs] = fs.readFileSync("input.txt").toString().trim().split("\n");

let mapping = {
  prince: [],
  rose: [],
};

let prince;
let rose;
let leng;

for (let i = 0; i < tcs.length; i++) {
  const spl = tcs[i].split(" ");

  if (spl.length === 4) {
    if (leng === 0) {
      console.log(mapping.prince, "prince");
      console.log(mapping.rose, "rose");
      console.log(countLayer());
      console.log("-----------");
    }
    const [x1, y1, x2, y2] = spl;
    prince = [+x1, +y1];
    rose = [+x2, +y2];
    console.log(prince, rose, "prince/rose by 4");
  } else if (spl.length === 1) {
    leng = +tcs[i];
  } else {
    const [x1, y1, r] = spl;
    markBoundary(x1, y1, r);
    leng--;
  }
}

if (leng === 0) {
  console.log(countLayer());
}

function markBoundary(x1, y1, r) {
  let leftTop = [+x1 - +r, +y1 - +r];
  let rightBottom = [+x1 + +r, +y1 + +r];

  for (let i = leftTop[0]; i <= rightBottom[0]; i++) {
    for (let j = leftTop[1]; j <= rightBottom[1]; j++) {
      if (prince[0] === i && prince[1] === j) {
        mapping.prince.push(`${x1}_${y1}_${r}`);
      }
      if (rose[0] === i && rose[1] === j) {
        mapping.rose.push(`${x1}_${y1}_${r}`);
      }
    }
  }
}

function countLayer() {
  const set = new Set([...mapping.prince, ...mapping.rose]);

  mapping.prince = [];
  mapping.rose = [];

  return set.size;
}
