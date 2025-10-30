//https://school.programmers.co.kr/learn/courses/30/lessons/176963

function solution(name, yearning, photo) {
  var answer = [];
  const nameYearning = {};

  // {name : score, ...} 생성
  for (i = 0; i < name.length; i++) {
    nameYearning[name[i]] = `${yearning[i]}`;
  }

  //포토를 한 줄 한 줄 분리해서 돌림
  for (a = 0; a < photo.length; a++) {
    const photoline = photo[a];
    const score = [];

    // 포토 한 줄의 한 사람 한 사람 이름을 분리해서 점수를 구해서 score에 추가
    for (y in photoline) {
      const character = photoline[y];
      score.push(nameYearning[character]);
    }
    console.log(score);

    // 스코어를 합
    let sum = 0;
    for (x of score) {
      console.log("!!, ", parseInt(x));
      if (x !== undefined) {
        sum = sum + parseInt(x);
      }
    }

    //합한 스코어를 answer에 추가
    answer.push(sum);
  }

  return answer;
}
