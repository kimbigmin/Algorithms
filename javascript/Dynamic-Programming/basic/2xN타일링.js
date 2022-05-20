// 2 x N 타일링 - 다이나믹 프로그래밍

const input = Number(require("fs").readFileSync("./note.txt").toString());

function solution(input) {
  const DP = Array(input + 1).fill(0);
  DP[1] = 1;
  DP[2] = 3;
  for (let i = 3; i <= input; i++) {
    DP[i] = (DP[i - 1] + 2 * DP[i - 2]) % 10007;
  }

  return DP[input];
}

console.log(solution(input));
