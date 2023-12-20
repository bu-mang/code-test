function facto(n) {
  if (n === 1) return 1;
  return n * facto(n - 1);
}

console.log(facto(10));
// 팩토리얼 더하기 머신

function sumOfArr(arr) {
  if (arr.length === 1) return arr[0];
  return arr.pop() + sumOfArr(arr);
}
console.log(sumOfArr([1, 2, 3, 4, 5]));
// 배열의 내용 더하기 머신

const potatoes = ["왕감자", "포테이토", "감자의효능", "감튀", "감스트"];
function sumOfLength(array) {
  let copy = [...array];
  console.log(copy, "cp");

  if (copy.length === 1) return copy.pop().length;
  return copy.pop().length + sumOfLength(copy);
}
console.log(sumOfLength(potatoes), "ptt");
console.log(potatoes);
// 배열의 문자열들 길이의 총합 구하기 머신

function strLength(str) {
  if (str.length === 1) return 1;
  return strLength(str.slice(0, -1)) + 1;
}
console.log(strLength("strawberry"));

function power(x, n) {
  if (n === 1) return x;
  return x * power(x, n - 1);
}
console.log(power(6, 3));
