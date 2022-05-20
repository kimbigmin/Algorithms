// 수학 - 골드바흐의 추측

const input = require("fs")
  .readFileSync("./note.txt")
  .toString()
  .trim()
  .split("\n");

const cases = input.splice(0, input.length - 1);

// 소수 구하기
const getPrimes = (maxNum) => {
  const primes = Array(maxNum + 1).fill(true);
  primes[0] = false;
  primes[1] = false;

  for (let i = 2; i < Math.sqrt(primes.length); i++) {
    if (primes[i]) {
      for (let j = 2; j <= primes.length / i; j++) {
        primes[i * j] = false;
      }
    }
    continue;
  }

  return primes;
};

function solution(cases) {
  // 불리언으로 이루어진 소수 판별 변수
  const prime = getPrimes(Math.max(...cases));
  // 소수를 숫자로 변경한 변수
  const primeNums = prime
    .map((el, idx) => {
      return el ? idx : null;
    })
    .filter((el) => el)
    .slice(1);

  // 정답 문자열을 담는 answer 변수
  const answer = [];

  for (let i = 0; i < cases.length; i++) {
    let index = 0;
    while (cases[i] / 2 >= primeNums[index]) {
      const diffNum = cases[i] - primeNums[index];
      if (prime[diffNum]) {
        answer.push(`${cases[i]} = ${primeNums[index]} + ${diffNum}`);
        break;
      }
      index++;
    }
    if (cases[i] / 2 < primeNums[index]) {
      answer.push("Goldbach's conjecture is wrong.");
    }
  }

  return answer;
}

console.log(solution(cases).join("\n"));
