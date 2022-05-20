// 수학 - 팩토리얼 => 재귀버전 (콜스택 오버플로 에러 발생 )---------------------------------------------
const input = require("fs").readFileSync("./note.txt").toString().trim();

function solution(n) {
  if (n === 0) {
    return 1;
  } else {
    if (n === 1) {
      return 1;
    }
    return n * solution(n - 1);
  }
}

console.log(solution(input));

// 팩토리얼 => for문 버전 (통과)---------------------------------------------
const input = require("fs").readFileSync("./note.txt").toString().trim();

function solution(n) {
  let answer = 1;
  for (let i = n; i >= 1; i--) {
    answer *= i;
  }
  return answer;
}

console.log(solution(input));
