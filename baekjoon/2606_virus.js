//2606 바이러스
let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

let [total, net, ...rest] = input;
total = Number(total);
rest = rest.map((x) => x.split(" ").map(Number));

console.log(total, "total");
console.log(rest, "rest");

const visited = Array.from({ length: total + 1 }, (v, _) => (v = 0));
const linked = new Array(total + 1).fill(0).map((x) => []);

for (let i = 0; i < rest.length; i++) {
  linked[rest[i][0]].push(rest[i][1]);
  linked[rest[i][1]].push(rest[i][0]);
}

function dfs(idx) {
  if (visited[idx]) return;
  visited[idx] = 1;
  for (let j = 0; j < linked[idx].length; j++) {
    dfs(linked[idx][j]);
  }
}
dfs(1);

console.log(linked, "linked");
console.log(visited, "visited");

let result = visited.slice(2);
result.length ? console.log(result.reduce((a, b) => a + b)) : console.log(0);
// [[], [2, 5], [3], [], [7], [2,6], [], []]

// 7
// 6
// 1 2
// 2 3
// 1 5
// 5 2
// 5 6
// 4 7
