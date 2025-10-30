// Object.entries() 연습
const obj = {
  arg1: "nene",
  arg2: "bebe",
  arg3: "rere",
};

const obj2 = {
  arg3: "rere",
  arg4: "bijou",
  arg5: "bally",
};

const obj3 = {
  name: "haku",
};

//Object.entries
console.log(obj);
const ent = Object.entries(obj);
console.log(ent);
const mapped = ent.map((v) => `${v[0]}: ${v[1]}`);
console.log(mapped);

//Object.assign
const returnedObj = Object.assign(obj, obj2);
console.log(obj);
console.log(returnedObj);
console.log(returnedObj === obj); // 같은 주소값을 가리킴

console.log(obj2); // 두 번째 인자는 변함 없음

const newObj = Object.assign({ ...obj2 }, obj3);
console.log(newObj);
console.log(newObj === obj2); // false. 구조분해할당을 했기 때문에.

// 비동기 통신 연습
// promise
// async - await

// try - catch 문
// try {
//   nonExistentFunction();
// } catch (err) {
//   console.error(err);
// }
//catch문에서 err를 매개변수로 받을 수 있다?

// try {
//   alert("문제없이 실행됐습니다.");
//   throw new Error("원하는 에러 메세지");
// } catch (err) {
//   alert(err); // Error: 원하는 에러 메세지
// } finally {
//
// }
