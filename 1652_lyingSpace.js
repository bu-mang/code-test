// 누울 자리를 찾아라, 1652
let fs = require("fs");
const [n, ...map] = fs.readFileSync("input.txt").toString().trim().split("\n");

console.log(rowFinder(map), colFinder(map));

function rowFinder(map) {
  let result = 0;

  for (let i = 0; i < n; i++) {
    let combo = 0;
    let prev = "";

    for (let j = 0; j < n; j++) {
      const current = map[i][j];

      if (prev === "." && current === ".") {
        combo++;
        if (j === n - 1) {
          result++;
          combo = 0;
        }
      } else {
        if (combo > 0) {
          result++;
          combo = 0;
        }
      }
      prev = map[i][j];
    }
  }

  return result;
}

function colFinder(map) {
  let result = 0;

  for (let i = 0; i < n; i++) {
    let combo = 0;
    let prev = "";

    for (let j = 0; j < n; j++) {
      const current = map[j][i];

      if (prev === "." && current === ".") {
        combo++;
        if (j === n - 1) {
          result++;
          combo = 0;
        }
      } else {
        if (combo > 0) {
          result++;
          combo = 0;
        }
      }
      prev = map[j][i];
    }
  }

  return result;
}
