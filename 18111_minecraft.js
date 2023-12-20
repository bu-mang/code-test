// 18111 마인크래프트
let fs = require("fs");
let [meta, ...list] = fs.readFileSync("input.txt").toString().trim().split("\n");

const [N, M, B] = meta.split(" ").map(Number);
let maxH = -1;
let minH = 257;
let minTime = null;
let resH = null;

list = list.map((val) => {
  const spl = val.split(" ").map(Number);
  const max = Math.max(...spl);
  const min = Math.min(...spl);
  if (max > maxH) {
    maxH = max;
  }
  if (min < minH) {
    minH = min;
  }
  return spl;
});

class Char {
  constructor(store) {
    this.inven = store;
    this.playTime = 0;
  }

  PutInven(curH, toH) {
    // from 현재 높이 to 목표 높이
    let diff = curH - toH;
    this.inven += diff;
    this.playTime += 2 * diff;
  }

  takeOutInven(curH, toH) {
    let diff = toH - curH;
    this.inven -= diff;
    this.playTime += diff;
  }

  getPlayTime() {
    return this.playTime;
  }

  getInven() {
    return this.inven;
  }
}

// 일단 완전탐색 가보자
// 안 되면 거기에서 dp적용할 생각해..
for (let tarH = maxH; tarH >= minH; tarH--) {
  const char = new Char(B);

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      let curBlockH = list[i][j];
      if (curBlockH === tarH) {
        continue;
      } else if (curBlockH > tarH) {
        //  현재블록높이가 타겟보다 크면
        char.PutInven(curBlockH, tarH);
      } else if (curBlockH < tarH) {
        // 현재블록높이가 타겟보다 작으면
        char.takeOutInven(curBlockH, tarH);
      }
    }
  }

  const thisTime = char.getPlayTime();
  const thisInven = char.getInven();
  if (thisInven < 0) continue;
  if (minTime === null) {
    minTime = thisTime;
    resH = tarH;
  } else if (minTime > thisTime) {
    minTime = thisTime;
    resH = tarH;
  }
}
console.log(minTime + " " + resH);
