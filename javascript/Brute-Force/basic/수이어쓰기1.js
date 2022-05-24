// 브루트 포스 문제 - 수 이어 쓰기 1 (백준 1748번)

// 1. 아래 규칙성을 생각하여 풀었다.
// 1 ~9 = 9 x 1
// 10 ~99 = 90 x 2
// 100 ~999 = 900 x 3
// 1000 ~9999 = 9000 x 4
// 10000 ~99999 = 90000 x 5
// ...
// ..
// .

// 2. 숫자의 자릿수만큼 반복문을 돌린 후 마지막 자릿수에서 자릿수가 시작하는 숫자에서 n을 빼고 그에 맞는 자릿수 i를 곱해준다.

const path = require("path");
const input = require("fs")
  .readFileSync(path.resolve(__dirname, "../../input.txt"))
  .toString()
  .trim();

function solution(num) {
  let answer = 0;

  // 숫자의 자리수 만큼 반복
  for (let i = 1; i <= String(num).length; i++) {
    // 마지막 자릿수일 때
    if (i !== String(num).length) {
      answer += 9 * 10 ** (i - 1) * i;
      // 마지막 자릿수가 아닐 때
    } else {
      answer += (num - 10 ** (i - 1) + 1) * i;
    }
  }

  console.log(answer);
}

solution(input);
