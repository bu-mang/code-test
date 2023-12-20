//재귀함수;
function pacto(n) {
  if (n === 1 || n === 0) return 1;
  return n * pacto(n - 1);
}
console.log(pacto(5));

//피보나치 n번째 수를 찾기
let arr = [0, 1];

function fibo(num) {
  if (num === 0 || num === 1) return num;
  return fibo(num - 1) + fibo(num - 2);
}
console.log(fibo(10));

// i = 2;
// while (i <= n) {
//   console.log(i + 1 + " 번째 수");
//   arr[i] = arr[i - 1] + arr[i - 2];
//   i++;
//   console.log(arr[i - 1]);
// }
// console.log(`8 번 째 수는 ${arr[n]} 입니다.`);
