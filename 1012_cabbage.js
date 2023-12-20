// 1012 유기농 배추
let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

const tcNum = input[0]; // 테스트 넘버
const condIdx = []; // "10 10 6" 같이 되어있는 조건 문장의 인덱스
const conditions = input.filter((arg, i) => {
  // 조건 문장
  const args = arg.split(" ");
  if (args.length === 3) {
    condIdx.push(i);
    return arg;
  }
});

for (let tc = 0; tc < tcNum; tc++) {
  //테스트 케이스 횟수 만큼 반복
  let [xSpan, ySpan, cabNum] = conditions[tc].split(" "); // 조건 문장에서 변수 얻기

  const span = []; // 2차원 배열 범위
  for (let y = 0; y < ySpan; y++) {
    // 세로 행 반복
    span.push([]);
    for (let x = 0; x < xSpan; x++) {
      // 가로 행 반복
      span[y].push(0); // 0으로 채워넣음
    }
  }
  /*
  0 0 0 0 0 0 0 0 0
  0 0 0 0 0 0 0 0 0
  0 0 0 0 0 0 0 0 0
  0 0 0 0 0 0 0 0 0
  ...
  */

  for (let i = condIdx[tc] + 1; i < input.length; i++) {
    // 조건 문장의 인덱스 + 1 부터 3마디 나오기 전까지
    if (input[i].split(" ").length === 3) {
      break;
    } else {
      const [x, y] = input[i].split(" ").map(Number);
      // console.log(x, y);
      span[y][x] = 1;
    }
  }
  /*
  1 1 0 0 0 0 0 0 0
  0 1 0 0 1 0 0 0 0
  0 0 0 0 1 0 0 0 0
  0 0 1 1 0 0 0 0 0
  ...
  */

  function dfs(y, x) {
    if (cabNum === 0) return;
    if (y > -1 && span[y][x]) {
      span[y][x] = 2; // 방문했으면 1을 2로 바꿔준다.
      // console.log(span[y][x]);
      cabNum--;
      if (span[y][x + 1] === 1) {
        // 우측으로 이동 가능?
        dfs(y, x + 1); // 우측으로 ㄱㄱ
      }
      if (span[y + 1] && span[y + 1][x] === 1) {
        // 아래로 이동 가능?
        dfs(y + 1, x); // 아래로 ㄱㄱ
      }
      if (span[y][x - 1] === 1) {
        // 좌측으로 이동 가능?
        dfs(y, x - 1); // 좌측으로 ㄱㄱ
      }
      if (y - 1 > -1 && span[y - 1][x] === 1) {
        //위로 이동 가능?
        dfs(y - 1, x); // 위로 ㄱㄱ
      }
    }
  }

  let cnt = 0; // 순회하는 횟수
  for (let j = 0; j < ySpan; j++) {
    for (let i = 0; i < xSpan; i++) {
      if (span[j][i] === 1) {
        // 만약 1이면
        dfs(j, i); // 순회 시작.
        cnt++; // 순회를 했으니 카운터++
      }
    }
  }
  /*
    순회가 시작하면 주변에 있는 접근 가능한(1인) 인자는 모두 2로 바꿔지기 때문에, 순회가 시작할 때만 카운터를 높일 수 있다. 즉 5번을 움직일 수 있다.
  */
  console.log(cnt);
}
