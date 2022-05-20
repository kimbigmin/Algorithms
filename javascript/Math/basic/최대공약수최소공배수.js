// 수학 - 최대공약수(gcd) 최소공배수(lcm) 구하기

const input = require("fs")
  .readFileSync("./note.txt")
  .toString()
  .trim()
  .split(" ");

let [num1, num2] = input;

num1 = +num1;
num2 = +num2;

function getGCD(a, b) {
  const remainder = a % b;
  if (remainder === 0) return b;

  return getGCD(b, remainder);
}

function solution(a, b) {
  const gcd = getGCD(a, b);
  const lcm = gcd * (a / gcd) * (b / gcd);

  return [gcd, lcm];
}

const answer = solution(num1, num2);

answer.forEach((el) => console.log(el));
