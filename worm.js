let fs = require("fs");
let input = fs.readFileSync("input2.txt").toString().trim().split("\n");
// console.log(input);

const [nodes, wires, ...list] = input;
const graph = [];
for (let i = 0; i <= +nodes; i++) graph.push([]);

for (let i = 0; i < wires; i++) {
  const [spl1, spl2] = list[i].split(" ");
  graph[+spl1].push(spl2);
  graph[+spl2].push(spl1);
}
let z = 0;
for (x of graph) console.log(x, z++);
console.log();

let cnt = 0;
let visited = new Array(nodes + 1).fill(false);
function dfs(x) {
  visited[x] = true;
  cnt++; //방문하면 cnt를 올림... 처음 1을 콜했을 때 올라간 cnt만 빼고 정답으로 출력.
  console.log(graph[x], x, "!");
  for (y of graph[x]) {
    if (!visited[y]) dfs(y); // 안 간 곳만 방문하게 함
  }
}
dfs(1);
console.log(cnt - 1);
