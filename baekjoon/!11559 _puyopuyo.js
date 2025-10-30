// 11559 뿌요뿌요
let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

// 1. 배추 밭 지렁이 풀기 로직과 비슷하게 풀기 (이어져있는게 4개 이상 있나?)
// 2. 이어져 있다 하면
// => 카운터 ++ 해주기
// => 다 '.'이든 뭐든 새로운 걸로 바꾸기
// 3. 위에 뜬거 아래로 내려주기
// 4. 다시 반복
// 5. -해서 더 이상 터질게 없으면 종료

// 인접한 것이 얼마나 있는지 어떻게 판별하지?
// 연결 리스트를 만들까..?

const exist = [];
const needSortAgain = false
let cnt = 0


for (let i = 0; i < input.length; i++) {
  if (input[i].split("").filter((item) => item !== ".").length) {
    exist.push(input[i]);
  }
}
const linked = new Array(exist.length).fill().map((x) => new Array(exist[0].length).fill().map((x) => []));
let visited = new Array(exist.length).fill().map((x) => new Array(exist[0].length).fill().map((x) => []));

for (let i = 0; i < exist.length; i++) {
  for (let j = 0; j < exist[0].length; j++) {
    if (exist[i][j] === ".") continue;
    linked[i][j].push(exist[i - 1] !== undefined ? (exist[i - 1][j] !== "." ? `${i - 1} ${j}` : ".") : ".");
    linked[i][j].push(exist[i][j + 1] !== undefined ? (exist[i][j + 1] !== "." ? `${i} ${j + 1}` : ".") : ".");
    linked[i][j].push(exist[i + 1] !== undefined ? (exist[i + 1][j] !== "." ? `${i + 1} ${j}` : ".") : ".");
    linked[i][j].push(exist[i][j - 1] !== undefined ? (exist[i][j - 1] !== "." ? `${i} ${j - 1}` : ".") : ".");
  }
}
console.log(linked);

/*
  유기농 벌레 함수
*/
function dfs(i, j, linkedList ,cnt) {
  if (linked[i][j] === ".") {
    visited[i][j] = 1
    return
  }
  if (!visited[i][j]){
    return
  }
  for ()
}
