// function solution(common) {
//   var answer = 0;
//   const length = common.length - 1;
//   if (common[2] / common[1] === common[0]) {
//     const diff = common[2] / common[1];
//     console.log(diff);
//     return common[length] * diff;
//   } else {
//     const diff = common[1] - common[0];
//     return common[length] + diff;
//   }
// }

// function solution2(common) {
//   var answer = 0;
//   const length = common.length - 1;
//   if (common[0] + common[1] === common[2]) {
//     const diff = common[1] - common[0];
//     return common[length] + diff;
//   } else {
//     const diff = common[2] / common[1];
//     console.log(diff);
//     return common[length] * diff;
//   }
// }

// let common = [1, 2, 3, 4, 5];
// console.log(common.pop());
// console.log(common);

// for (i = 0; i < array.length; i++) {
//   const repeat = String(array[i]);
//   for (j = 0; j < repeat.length; j++) {
//     let first = repeat.slice(0, 1);
//     let others = repeat.slice(1, -1);
//     console.log("first: ", first);
//     console.log("repeat: ", repeat);
//     console.log("others: ", others);
//     if (first === "7") {
//       answer += 1;
//       first = others;
//     }
//   }
// }

console.log(
  Array.from(
    { length: 20 }, // 유사배열
    () => Array(10).fill(0) // 각각의 배열에 적용할 함수
  )
);
