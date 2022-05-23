// DP문제 - 카드 구매하기 (백준 11052번) - 못 푼 문제 -

const path = require("path");

const input = require("fs")
  .readFileSync(path.resolve(__dirname, "../../input.txt"))
  .toString()
  .trim()
  .split("\n");

const cardNum = +input[0];
const cardList = input[1].split(" ").map((el) => +el);

function solution(num, list) {
  const dp = Array(num + 1).fill(0);
  dp[1] = list[0];
  // 카드 개수 반복문
  for (let i = 1; i <= num; i++) {
    // 개수에서 가장 큰 값 도출 반복문
    for (let j = 1; j <= i; j++) {
      dp[i] = Math.max(dp[i], dp[i - j] + list[j - 1]);
    }
  }

  return dp[num];
}

console.log(solution(cardNum, cardList));
