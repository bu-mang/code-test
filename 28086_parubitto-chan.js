// 28086 미소녀 컴퓨터 파루빗토 쨩
let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim();

if (input.includes("+")) {
  let [a, b] = input.split("+");
  const [demicalA, demicalB] = octalToDemical(a, b);

  const result = demicalToOctal(demicalA + demicalB);
  if (result) {
    console.log(result);
  } else {
    console.log("invalid");
  }
} else if (input.includes("/")) {
  let [a, b] = input.split("/");
  const [demicalA, demicalB] = octalToDemical(a, b);
  const result = demicalToOctal(Math.floor(demicalA / demicalB));
  if (result) {
    console.log(result);
  } else {
    console.log("invalid");
  }
} else if (input.includes("*")) {
  let [a, b] = input.split("*");
  const [demicalA, demicalB] = octalToDemical(a, b);

  const result = demicalToOctal(demicalA * demicalB);
  if (result) {
    console.log(result);
  } else {
    console.log("invalid");
  }
} else if (input.includes("-")) {
  let spl = input.split("-");
  console.log(spl);
  if (spl.length === 2) {
    const [demicalA, demicalB] = octalToDemical(spl[0], spl[1]);
    const result = demicalToOctal(demicalA - demicalB);
    if (result) {
      console.log(result);
    } else {
      console.log("invalid");
    }
  } else {
    const [demicalA, demicalB] = octalToDemical(-spl[1], spl[2]);
    const result = demicalToOctal(demicalA - demicalB);
    if (result) {
      console.log(result);
    } else {
      console.log("invalid");
    }
  }
}

function octalToDemical(...rest) {
  let temp = rest.map((x) => parseInt(x, 8));
  return temp;
}

function demicalToOctal(num) {
  return num.toString(8);
}
