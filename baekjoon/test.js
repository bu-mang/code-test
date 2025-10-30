const arr = [1, 3, 2, 4, 5, 6, 10];
const arr2 = [1, 1, 1, 3, 2, 4];

// console.log(arr.sort((a, b) => a - b));
console.log(
  arr.sort((a, b) => {
    console.log(a, b, "a b");
    if (a > b) {
      return -1;
    } else {
      1;
    }
  })
);
// console.log(arr2.sort((a, b) => a - b));
