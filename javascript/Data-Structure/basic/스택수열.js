// 자료구조 1 - 스택 수열

const path = require("path");

const input = require("fs")
  .readFileSync(path.resolve(__dirname, "../../input.txt"))
  .toString()
  .trim()
  .split("\n");

const num = input[0];
const sequence = input.slice(1);

function solution(num, stack) {
  const answerStack = [];
  const numberStack = Array(Number(num))
    .fill(null)
    .map((_, i) => String(i + 1))
    .reverse();

  const answer = [];
  const checkList = [];

  for (let i = 0; i < stack.length; i++) {
    while (
      !(
        numberStack.length === 0 &&
        answerStack[answerStack.length - 1] !== stack[i]
      )
    ) {
      if (answerStack[answerStack.length - 1] !== stack[i]) {
        const popped = numberStack.pop();
        answerStack.push(popped);
        answer.push("+");
      } else {
        const val = answerStack.pop();
        checkList.push(val);
        answer.push("-");
        break;
      }
    }
  }
  if (stack.length === checkList.length) {
    answer.forEach((el) => {
      console.log(el);
    });
  } else {
    console.log("NO");
  }
}

solution(num, sequence);
