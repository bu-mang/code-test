//11501 주식
let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// math.max를 이용하는 방식 && math.min을 이용하는 방식
// max를 계속 구해서 거기서 팔기

for (let i = 1; i < input.length; i++) {
  if (i % 2 === 0) {
    let days = input[i];
    // let divnPoint = 0
    // if (Number(input[i-1]) > 100000) {
    //   let cnt = 0
    //   while (cnt < 10 ) {
    //     if (days[5000000 + cnt] === " ") {
    //       divnPoint = 5000000 + cnt
    //       break
    //     }
    //     cnt++
    //   }
    //   let days.slice(divnPoint)
    // } else {
    days = days.split(" ").map(Number);
    // }

    let result = 0;
    let markerIdx = 0;

    while (days.length > 1) {
      const max = Math.max(...days);
      const min = Math.min(...days);
      if (max === min) break;

      markerIdx = days.indexOf(max) + 1;
      if (markerIdx === 1) break;

      let diff = 0;
      for (let i = 0; i < markerIdx; i++) {
        diff += max - days[i];
      }

      result += diff;
      days = days.slice(markerIdx);
    }
    console.log(result);
  }
}

// //메모리 초과
// for (let i = 0; i < tc.length; i++) {
//   let [num, days] = tc[i];
//   days = days.split(" ").map(Number);
//   const lastDay = days.length;
//   let store = [];
//   let maxProfit = 0;
//   // math.max를 이용하는 방식 && math.min을 이용하는 방식
//   // 오늘 내일 비교로만 하기

//   for (let j = 0; j < lastDay; j++) {
//     if (days[j + 1] === undefined) days[j + 1] = 0;
//     store.push(days[j]);
//     if (days[j] > days[j + 1]) {
//       if (store.length) {
//         store.push(days[j]);
//         const sold = sellAll(store);
//         store = [];
//         maxProfit += sold;
//       }
//     }
//   }

//   console.log(maxProfit);
// }

// function sellAll(arr) {
//   let diff = 0;
//   const max = Math.max(...arr);
//   arr.forEach((v) => {
//     diff += max - v;
//   });
//   return diff;
// }
