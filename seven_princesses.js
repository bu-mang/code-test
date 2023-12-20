let fs = require("fs");
let classmates = fs.readFileSync("input.txt").toString().trim().split("\n");

const candidates = [];
const visited = new Array(5).fill().map((x) => [0, 0, 0, 0, 0]);
const result = [];

// 1. length가 7일 때 반환
// 2. 가로나 세로 탐색을 계속 해야함 (배추 문제와 비슷)
// 3. Y가 4개 이상 있어야 함
// 4. dfs를 쓰면 될 듯
let cnt = 0;
function dfs(i, j) {
  if (candidates.length === 7) {
    if (candidates.filter((x) => x === "S") >= 4) {
      console.log(spl);
      cnt++;
    }
    visited[i][j] = 0;
    candidates.pop();
    return;
  }
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (visited[i][j]) continue;
      visited[i][j] = 1;
      candidates.push(classmates[i][j]);
      dfs(i, j);

      visited[i][j] = 0;
      candidates.pop();
    }
  }
}
dfs(0, 0);
console.log(cnt);

/*








*/

const candidates = [];
const visited = new Array(5).fill().map((x) => [0, 0, 0, 0, 0]);
const result = [];

// 1. length가 7일 때 반환
// 2. 가로나 세로 탐색을 계속 해야함 (배추 문제와 비슷)
// 3. Y가 4개 이상 있어야 함
// 4. dfs를 쓰면 될 듯
let cnt = 0;
function dfs(i, j) {
  if (i < 0 || i >= 5 || j < 0 || j >= 5) return;
  if (visited[i][j]) return;

  visited[i][j] = 1;
  candidates.push(classmates[i][j]);

  if (candidates.length === 7) {
    let spl = candidates.map((x) => x.split(" "));
    if (candidates.filter((x) => "S") >= 4) {
      spl = spl
        .map((x) => `${x[0]} ${x[1]}`)
        .sort((a, b) => a - b)
        .join("\n");
      if (!result.length) {
        result.push(spl);
        console.log("first", spl + "\n");
      } else {
        if (!result.includes(spl)) {
          result.push(spl);
          console.log("rest", spl + "\n");
        }
      }
      cnt++;
    }
    visited[i][j] = 0;
    candidates.pop();
    return;
  }

  dfs(i, j + 1);
  dfs(i + 1, j);
  dfs(i, j - 1);
  dfs(i - 1, j);

  visited[i][j] = 0;
  candidates.pop();
}
dfs(0, 0);
console.log(cnt);
