// 수학 - 소수 구하기

const input = require("fs").readFileSync("./note.txt").toString().split(" ");

const startNum = +input[0];
const endNum = +input[1];

function getPrimes(n) {
  const arr = Array(n + 1).fill(true);
  arr[0] = false;
  arr[1] = false;

  for (let i = 2; i <= n; i++) {
    if (arr[i] === true) {
      for (let j = 2; j <= n / i; j++) {
        arr[i * j] = false;
      }
    }
    continue;
  }

  return arr;
}

function solution(start, end) {
  const primes = getPrimes(end);
  let answer = [];

  for (let i = start; i <= end; i++) {
    if (primes[i]) answer.push(i);
  }

  return answer;
}

console.log(solution(startNum, endNum).join("\n")); // 출력시 새로 배운 점
