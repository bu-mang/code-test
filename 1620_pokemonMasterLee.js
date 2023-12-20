// 나는야 포켓몬 마스터 이다솜, 1620
let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

let [totalNum, questNum] = input[0].split(" ").map(Number);
const dogamArr = input.slice(1, totalNum + 1);
const dogamObj = {};

for (let i = 0; i < dogamArr.length; i++) {
  dogamObj[dogamArr[i]] = i + 1;
}

const questions = input.splice(totalNum + 1);

questions.forEach((el) => {
  if (Number(el)) {
    console.log(dogamArr[+el - 1]);
  } else {
    console.log(dogamObj[el]);
  }
});
