// 숫자 카드 10815
let fs = require("fs");
let [hisNum, hisCards, tarNum, tarCards] = fs.readFileSync("input.txt").toString().trim().split("\n");

hisCards = hisCards
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

tarCards = tarCards.split(" ").map(Number);

res = [];

// console.log(hisCards, tarCards);
for (tar of tarCards) {
  let min = 0;
  let max = hisNum - 1;
  let mid;

  while (min < max) {
    mid = parseInt((max + min) / 2);
    // console.log("mid: ", mid);
    if (tar > hisCards[mid]) {
      min = mid + 1;
      // console.log("min^: ", min, "max", max);
    } else {
      max = mid;
      // console.log("max^: ", max, "min: ", min);
    }
  }
  if (tar === hisCards[parseInt((min + max) / 2)]) {
    res.push(1);
  } else {
    res.push(0);
  }

  // console.log(min, max, "minmax out of while", "tar: ", tar, "hisCards[mid]: ", hisCards[parseInt((min + max) / 2)]);
}
console.log(res.join(" "));
// [ -10, 2, 3, 6, 10 ]
