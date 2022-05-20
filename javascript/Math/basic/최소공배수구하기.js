// 수학 - 최소공배수 구하기

const input = require("fs")
  .readFileSync("./note.txt")
  .toString()
  .trim()
  .split("\n");

const num = input[0];
const cases = input.slice(1).map((el) => el.split(" "));

function getGCD(a, b) {
  const remainder = a % b;
  if (remainder === 0) return b;

  return getGCD(b, remainder);
}

function solution(a, b) {
  const gcd = getGCD(a, b);
  const lcm = gcd * (a / gcd) * (b / gcd);

  return lcm;
}

cases.forEach((el) => {
  console.log(solution(+el[0], +el[1]));
});
