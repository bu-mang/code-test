// 회의실 배정 1931
let fs = require("fs");
let [tcNum, ...rest] = fs.readFileSync("input.txt").toString().trim().split("\n");

const arr = new Array(25).fill().map((v) => []);

for (let i = 0; i < tcNum; i++) {
  const spl = rest[i].split(" ").map(Number);
  arr[spl[0]].push(spl[1]);
}
console.log(arr);

// 없으면 다음 시각 ff

let maxTurn = 0;
function bookingDfs(hour, turn) {
  if (arr[hour].length) {
    for (endPoint of arr[hour]) {
      if (maxTurn < turn) maxTurn = turn;
      bookingDfs(endPoint, turn + 1);
    }
  } else {
    if (hour < 23) {
      bookingDfs(hour + 1, turn + 1);
    }
  }
}

bookingDfs(0, 0);
console.log(maxTurn);
