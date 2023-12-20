// 연결 요소의 갯수 11724
let fs = require("fs");
let [meta, ...list] = fs.readFileSync("input.txt").toString().trim().split("\n");

let [nodes, links] = meta.split(" ").map(Number);
let wired = {};
let cnt = 0;
let visited = new Array(nodes + 1).fill().map((v) => 0);

for (let i = 0; i < list.length; i++) {
  let data = list[i].split(" ").map(Number);
  if (wired[data[0]]) {
    wired[data[0]].push(data[1]);
  } else {
    wired[data[0]] = [data[1]];
  }

  if (wired[data[1]]) {
    wired[data[1]].push(data[0]);
  } else {
    wired[data[1]] = [data[0]];
  }

  // wired[data[0]] = wired[data[0]] ? [...wired[data[0]], data[1]] : [data[1]];
  // wired[data[1]] = wired[data[1]] ? [...wired[data[1]], data[0]] : [data[0]];
}

for (let i = 1; i <= nodes; i++) {
  if (!visited[i]) {
    dfs(i);
    cnt++;
  }
}

function dfs(node) {
  if (visited[node]) return;
  visited[node] = 1;
  if (wired[node] === undefined) {
    return;
  }
  for (let nxt of wired[node]) {
    if (!visited[nxt]) {
      dfs(nxt);
    }
  }
}
if (nodes > 1 || links > 0) {
  console.log(cnt);
} else {
  console.log(1);
}
