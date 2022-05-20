// 1,2,3 더하기 - DP

const input = require("fs")
  .readFileSync("./note.txt")
  .toString()
  .trim()
  .split("\n");
const num = input[0];
const testCases = input.slice(1);

function solution(num) {
  const DP = Array(num + 1).fill(0);
  DP[0] = 1;
  DP[1] = 1;
  DP[2] = 2;

  for (let i = 3; i <= num; i++) {
    DP[i] = DP[i - 3] + DP[i - 2] + DP[i - 1];
  }

  return DP[num];
}

testCases.forEach((el) => {
  console.log(solution(el));
});
