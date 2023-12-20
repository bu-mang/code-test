let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

// 정렬된 순서를 유지하면서 배열에 삽입할 가장 왼쪽 인덱스 반환
function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    console.log(mid, "mid");
    if (arr[mid] >= target) {
      console.log(end, "end before");
      end = mid;
      console.log(end, "end after");
    } else {
      console.log(start, "start before");
      start = mid + 1;
      console.log(start, "start after");
    }
  }
  return end;
}

// 정렬된 순서를 유지하면서 배열에 삽입할 가장 오른쪽 인덱스 반환
function upperBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    console.log(mid, "mid");
    if (arr[mid] > target) {
      console.log(end, "end before");
      end = mid;
      console.log(end, "end after");
    } else {
      console.log(start, "start before");
      start = mid + 1;
      console.log(start, "start after");
    }
  }
  return end;
}

arr = [1, 2, 3, 4, 4, 5, 5, 5, 6, 7, 9, 9, 10, 10, 10, 11];

console.log(lowerBound(arr, 8, 0, arr.length - 1));
