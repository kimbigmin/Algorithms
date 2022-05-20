// 1로 만들기 - 다이나믹 프로그래밍

const input = require("fs")
  .readFileSync("./note.txt")
  .toString()
  .trim()
  .split(" ");

function solution(input) {
  input = Number(input);
  const dp = Array(input + 1).fill(0);

  for (let i = 2; i <= input; i++) {
    dp[i] = dp[i - 1] + 1;

    if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  }

  return dp[input];
}

console.log(solution(input));
