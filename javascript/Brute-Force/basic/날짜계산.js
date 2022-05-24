// 브루트포스 문제 - 날짜 계산 (백준 1476번) - 애초에 js로 풀 수 없는 문제..
const memory = require("memory");

const path = require("path");
const input = require("fs")
  .readFileSync(path.resolve(__dirname, "../../input.txt"))
  .toString()
  .trim()
  .split(" ")
  .map((el) => +el);

const [E, S, M] = input;
let year = 1;

while (true) {
  if ((year - E) % 15 === 0 && (year - S) % 28 === 0 && (year - M) % 19 === 0) {
    console.log(year);
    break;
  }
  year++;
}

const mb = memory();
console.log(mb);
