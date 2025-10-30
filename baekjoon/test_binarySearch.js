function lowerBound(arr, target, start, end) {
  while (start < end) {
    // 이게 거짓이라면 start와 end가 같다는 거
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
    console.log("mid", mid, "arr", arr[mid], "start", start, "end", end);
  }
  return end;
}

function upperBound(arr, target, start, end) {
  while (start < end) {
    // 이게 거짓이라면 start와 end가 같다는 거
    let mid = parseInt((start + end) / 2);
    if (arr[mid] > target) end = mid;
    else start = mid + 1;
  }
  return end;
}

function countByRange(arr, leftValue, rightValue) {
  // 유의: lowerBounddhk와 upperBound는 end 변수의 값을 배열의 길이로 설정
  let rightIndex = upperBound(arr, rightValue, 0, arr.length);
  let leftIndex = upperBound(arr, leftValue, 0, arr.length);
  console.log(rightIndex, leftIndex, "rl");
  return rightIndex - leftIndex;
}

const arr = Array.from({ length: 10 }, (v, i) => i + 1);
console.log(arr);
console.log("lowerBound", lowerBound(arr, 5, 0, 9));
console.log(countByRange(arr, 2, 4));
