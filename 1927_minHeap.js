// 최소 힙 1927
let fs = require("fs");
let [total, ...list] = fs.readFileSync("input.txt").toString().trim().split("\n");
list = list.map(Number);

let arr = [];
let ans = "";

/*

  1차 시도 - 그냥 자바스크립트 배열로 풀기

*/

// for (let i = 0; i < total; i++) {
//   if (list[i] === 0) {
//     if (arr.length === 0) {
//       ans += 0 + "\n";
//     } else {
//       const min = Math.min(...arr);
//       const idx = arr.findIndex((v) => v === min);
//       arr.splice(idx, 1);
//       ans += min + "\n";
//     }
//   } else {
//     arr.push(list[i]);
//   }
// }
// console.log(ans);

/*

  2차 시도 - sort() 메소드가 n(logn)을 보장한다고 하던데

*/
// for (let i = 0; i < total; i++) {
//   if (list[i] === 0) {
//     if (arr.length === 0) {
//       ans += 0 + "\n";
//     } else {
//       const min = arr[0];
//       arr = arr.slice(1);
//       ans += min + "\n";
//     }
//   } else {
//     arr = [list[i]].concat(arr);
//     arr.sort((a, b) => a - b);
//   }
// }
// console.log(ans);

/*

  3차 시도

*/

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  size() {
    return this.heap.length - 1;
  }

  getMin() {
    return this.heap[1] ? this.heap[1] : null;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  heappush(value) {
    this.heap.push(value);
    let curIdx = this.heap.length - 1;
    let parIdx = (curIdx / 2) >> 0; // 소수점 버린것.

    while (curIdx > 1 && this.heap[parIdx] > this.heap[curIdx]) {
      this.swap(parIdx, curIdx);
      curIdx = parIdx;
      parIdx = (curIdx / 2) >> 0; // 소수점 버리기
    }
  }

  heappop() {
    const min = this.heap[1];
    if (this.heap.length <= 2) this.heap = [null];
    else this.heap[1] = this.heap.pop();

    let curIdx = 1;
    let leftIdx = curIdx * 2;
    let rightIdx = curIdx * 2 + 1;

    if (!this.heap[leftIdx]) return min;
    if (!this.heap[rightIdx]) {
      if (this.heap[leftIdx] < this.heap[curIdx]) {
        this.swap(leftIdx, curIdx);
      }
      return min;
    }

    while (this.heap[leftIdx] < this.heap[curIdx] || this.heap[rightIdx] < this.heap[curIdx]) {
      const minIdx = this.heap[leftIdx] > this.heap[rightIdx] ? rightIdx : leftIdx;
      this.swap(minIdx, curIdx);
      curIdx = minIdx;
      leftIdx = curIdx * 2;
      rightIdx = curIdx * 2 + 1;
    }

    return min;
  }
}
