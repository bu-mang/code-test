// 6603 로또
let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

const lines = input.slice(0, -1); // 마지막 쓸데없는 0 제거
let answer = ""; //제출용 빈 문자열

for (let j = 0; j < lines.length; j++) {
  const spl = lines[j].split(" ");
  let k = Number(spl[0]); // 첫글자는 총갯수로 지정
  let numberSet = spl
    .slice(1) //첫글자를 뺀 나머지만 numberSet으로 지정
    .map(Number)
    .sort((a, b) => a - b); // 오름차순으로 정렬

  const combination = []; // 조합을 확인할 배열

  function dfs(numberSet) {
    if (combination.length === 6) {
      // 기저조건: combination이 6개가 꽉 차면
      const temp = combination // 문자열로 바꿔 join
        .slice()
        .sort((a, b) => a - b)
        .join(" ");
      if (!answer.includes(temp)) {
        // 이미 답안에 있나 확인
        answer += temp + "\n"; // 없으면 추가
      }
      return;
    }

    for (let i = 0; i < k; i++) {
      if (combination.includes(numberSet[i])) continue; //이미 combination에 있는 숫자는 추가 안 함 (중복제거)
      if (combination[combination.length - 1] > numberSet[i]) continue; // 전에 추가된 숫자보다 크면 추가 안 함 (오름차순인 경우만 선택)
      if (combination.length === 0 && i > 7) break; // 1번째 추가되는 인자의 순서가 7번째보다 크면 종료 (최대 13개인 조합에서 6개를 고르는 조합인데 첫번째 인자가 8번째 수일리가 없음)
      combination.push(numberSet[i]); //조합에 추가
      dfs(numberSet); //dfs돌림
      combination.pop(); // 조합에서 제거
    }
  }

  dfs(numberSet);
  answer += "\n"; //줄바꿈 해줌
}
console.log(answer.trim());
