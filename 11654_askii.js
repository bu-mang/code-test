let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim();

const result = input.charCodeAt(0);
console.log(result);
