// 수학 - 소수 찾기

const input = require("fs").readFileSync("./note.txt").toString().split("\n");

const num = +input[0];
const cases = input[1].split(" ").map((el) => +el);

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

function solution(cases) {
  const primes = getPrimes(1000);
  let answer = 0;

  cases.forEach((el) => {
    if (primes[el]) answer++;
  });

  return answer;
}

console.log(solution(cases));
