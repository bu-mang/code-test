// 1074 z
let fs = require("fs");
let [N, r, c] = fs.readFileSync("input.txt").toString().split(" ").map(Number);

// 1. 2^n x 2^n 배열을 생성해야되나?
// 2. dfs로 풀어야하나? bfs로?
// 3. turn 개념을 넣어야한다.
// 4. 순회가 다 끝나고 배열좌표애 접근해야되나?
// 5. 좌상 우상 좌하 우하 순으로.
// 좌상단 우상단 좌하단 우하단 나누기를 계속.

function z(N, r, c) {
  let cnt = 0;
  const divn = 2 ** N;
  const origin = new Array(divn).fill().map((v) => new Array(divn).fill().map((v) => 0));

  function dfs(arr, divn, coord) {
    let lt = arr.slice(0, divn / 2).map((v) => v.slice(0, divn / 2));
    let rt = arr.slice(0, divn / 2).map((v) => v.slice(divn / 2));
    let lb = arr.slice(divn / 2).map((v) => v.slice(0, divn / 2));
    let rb = arr.slice(divn / 2).map((v) => v.slice(divn / 2));

    console.log(lt, "lt");
    console.log(rt, "rt");
    console.log(lb, "lb");
    console.log(rb, "rb");

    if (lt[0].length === 1) {
      console.log("현재 가지고 있는 arr 편집");
      lt[0] = cnt++;
      rt[0] = cnt++;
      lb[0] = cnt++;
      rb[0] = cnt++;
      console.log(lt, rt, lb, rb);
      return `${lt[0]} ${rt[0]} & ${lb[0]} ${rb[0]}`;
    }

    coord.push(0);
    lt = dfs(lt, divn / 2, coord);
    coord.pop();
    coord.push(1);
    rt = dfs(rt, divn / 2, coord);
    coord.pop();
    coord.push(2);
    lb = dfs(lb, divn / 2, coord);
    coord.pop();
    coord.push(3);
    rb = dfs(rb, divn / 2, coord);
    coord.pop();

    return [lt, rt, lb, rb];
  }
  console.log(dfs(origin, divn, []));
}

z(N, r, c);
