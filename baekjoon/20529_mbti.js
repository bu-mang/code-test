// 20529 가장 가까운 세 사람의 심리적 거리
let fs = require("fs");
let [n, ...arr] = fs.readFileSync("input.txt").toString().trim().split("\n");

for (let i = 0; i < arr.length; i++) {
  if (i % 2 === 0) continue;

  let closest = 100000;

  const list = arr[i].split(" ");
  const visited = new Array(list.length).fill(false);

  const stack = [];
  const CEIL = 3;

  function dfs(stack) {
    if (stack.length === CEIL) {
      let score = checkSame(...stack);

      if (score < closest) closest = score;
      return;
    }

    for (let i = 0; i < list.length; i++) {
      if (visited[i]) continue;
      stack.push(list[i]);
      visited[i] = true;
      dfs(stack);
      if (closest === 0) return;
      stack.pop();
      visited[i] = false;
    }
  }

  dfs(stack);

  console.log(closest);
}

function checkSame(a, b, c) {
  let score = 0;
  for (let i = 0; i < 4; i++) {
    if (a[i] === b[i] && a[i] === c[i] && b[i] === c[i]) {
      score += 0;
    } else {
      score += 2;
    }
  }
  return score;
}
