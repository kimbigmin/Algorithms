// 수학 - 팩토리얼 0의 개수  (스스로 못 푼 문제 )
const input = require("fs").readFileSync("./note.txt").toString().trim();

const solution = (n) => {
  let answer = 0;

  for (let i = 5; i <= n; i *= 5) {
    answer += Math.floor(n / i);
  }

  console.log(answer);
};

solution(input);
