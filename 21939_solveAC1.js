//21939 문제 추천 시스템 Version 1
let fs = require("fs");
let [solveACNum, ...rest] = fs.readFileSync("input.txt").toString().trim().split("\n");

const solveAC = rest.slice(0, solveACNum);
const commands = rest.slice(++solveACNum, rest.length);
const obj = {};

// 이진탐색 함수 작성 예정
function binarySearch(level) {
  solveAC;
  return;
}

// "문제번호 난이도" 형식을 버리고
// 난이도만 남길 예정.
for (let i = 0; i < solveAC.length; i++) {
  let args = solveAC[i].split(" ");
  obj[args[1]] = args[0];
  solveAC[i] = +args[1];
}

// 정답 문자열
let ans = "";
for (let i = 0; i < commands.length; i++) {
  let [command, prob, level] = commands[i].split(" ");
  let format = `${prob} ${level}`;
  if (command === "add") {
    console.log(format, "format");
  }

  if (command === "recommend") {
    // 추천
    if (prob === 1) {
      ans += obj[solveAC[solveAC.length - 1]] + "\n";
    } else {
      ans += obj[solveAC[0]] + "\n";
    }
  } else if (command === "add") {
    // 추가
    obj[prob] = level;
    solveAC.push(format);

    solveAC.sort((a, b) => a.split(" ")[1] - b.split(" ")[1]); //
    // O(1)을
  } else {
    // 삭제
    //solve
    obj[prob] = null;
    let tarIdx = binarySearch(prob, level);
    console.log(tarIdx);
    solveAC.splice(tarIdx, 0);
  }
}

console.log(ans);
