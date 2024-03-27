// 5179 우승자는 누구?
let fs = require("fs");
let [n, ...cases] = fs.readFileSync("input.txt").toString().trim().split("\n");

let board = null;
let index = 0;

const converter = {
  0: "A",
  1: "B",
  2: "C",
  3: "D",
  4: "E",
  5: "F",
  6: "G",
  7: "H",
  8: "I",
  9: "J",
};

for (let i = 0; i < cases.length; i++) {
  const spl = cases[i].split(" ");
  if (spl.length === 3) {
    const [m, n, p] = spl;
    index++;
    setTemplate(index, +p, +m);
  } else {
    const [player, prob, time, judge] = spl;
    describeScore(player, prob, +time, +judge);
  }
}

consoleScoreBoard();

function setTemplate(index, player, matter) {
  if (!board) {
    board = {};
  }
  board[index] = {};
  for (let i = 0; i < player; i++) {
    board[index][i + 1] = {};
    board[index][i + 1].result = 0;
    board[index][i + 1].solved = 0;
    for (let k = 0; k < matter; k++) {
      board[index][i + 1][converter[k]] = {
        negative: 0,
        judge: false,
        solvedTime: 0,
      };
    }
  }
}

function consoleScoreBoard() {
  for (let i = 1; i <= +n; i++) {
    console.log(`Data Set ${i}:`);
    const target = Object.entries(board[i]).sort((a, b) => {
      if (b[1].solved > a[1].solved) {
        return 1;
      } else if (b[1].solved === a[1].solved) {
        if (b[1].result > a[1].result) {
          return -1;
        } else {
          return 1;
        }
      } else {
        return -1;
      }
    });

    for (let j = 0; j < target.length; j++) {
      const player = target[j][0];
      const solved = target[j][1].solved;
      const score = target[j][1].result;

      console.log(`${player} ${solved} ${score}`);
    }
    console.log();
  }
}

function describeScore(player, prob, time, judge) {
  if (judge && !board[index][player][prob].judge) {
    board[index][player][prob].judge = true;
    board[index][player][prob].SolvedTime = time;
    board[index][player].result += +time + board[index][player][prob].negative * 20;
    board[index][player].solved++;
  } else {
    board[index][player][prob].negative++;
  }
}

// {
//   '1': {
//     result: 24,
//     A: { negative: 0, judge: false, solvedTime: 0 },
//     B: { negative: 0, judge: true, solvedTime: 0, time: 24 },
//     C: { negative: 1, judge: false, solvedTime: 0 },
//     D: { negative: 0, judge: false, solvedTime: 0 }
//   },
//   '2': {
//     result: 100,
//     A: { negative: 0, judge: false, solvedTime: 0 },
//     B: { negative: 0, judge: true, solvedTime: 0, time: 55 },
//     C: { negative: 1, judge: true, solvedTime: 0, time: 25 },
//     D: { negative: 0, judge: false, solvedTime: 0 }
//   },
//   '3': {
//     result: 55,
//     A: { negative: 0, judge: false, solvedTime: 0 },
//     B: { negative: 0, judge: false, solvedTime: 0 },
//     C: { negative: 0, judge: false, solvedTime: 0 },
//     D: { negative: 0, judge: true, solvedTime: 0, time: 55 }
//   }
// }
