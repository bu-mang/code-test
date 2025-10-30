// 1018 체스판 다시 칠하기
let fs = require("fs");
let [n, ...board] = fs.readFileSync("input.txt").toString().trim().split("\n");

const [width, height] = n.split(" ").map(Number);
let count = 0;

function checkTiles(w, h, bottom, near, count) {
  if (bottom === 0) {
    // 처음
    if (board[h][w] === "B") {
    } else {
    }
  } else if (bottom !== 8) {
    // 진행중일 때
    if (board[h][w] === near) {
    }
  } else {
    // 마지막
  }
}
