// 자료구조 1 - 단어 뒤집기

let input = require("fs").readFileSync("./note.txt").toString().split("\n");

const testCasesNum = input[0];
const testCases = input.slice(1);

function solution(sentance) {
  const answer = sentance
    .split(" ")
    .map((word) => word.split("").reverse().join(""));

  return answer.join(" ");
}

for (let i = 0; i < testCases.length; i++) {
  console.log(solution(testCases[i]));
}
