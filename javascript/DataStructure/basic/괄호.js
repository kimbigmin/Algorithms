// 자료구조 1 - 괄호

let input = require("fs")
  .readFileSync("./note.txt")
  .toString()
  .trim()
  .split("\n");

const num = input[0];
const inputData = input.slice(1);

function solution(parenthesis) {
  const stack = [];

  for (let i = 0; i < parenthesis.length; i++) {
    if (parenthesis[i] === ")") {
      if (stack[stack.length - 1] === "(") {
        stack.pop();
      } else {
        stack.push(parenthesis[i]);
      }
    } else {
      stack.push(parenthesis[i]);
    }
  }

  return stack.length === 0 ? "YES" : "NO";
}

inputData.forEach((el) => {
  console.log(solution(el));
});
