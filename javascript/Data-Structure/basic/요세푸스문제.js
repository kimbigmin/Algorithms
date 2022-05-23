// 자료구조 - 요세푸스문제 (백준 1158번) 못 푼 문제

// 1. 큐를 이용한 문제 : 순서를 확인하고 순서가 아니면 리스트의 맨 뒤로 다시 보낸다.
// 2. 해당 순서라면 리스트에서 숫자를 빼서 answer에 넣어준다.
// 3. answer 출력
// 4. 링크드 리스트로 Queue 를 직접 구현해서 풀면 성능이 더 빨라진다.

const path = require("path");

const input = require("fs")
  .readFileSync(path.resolve(__dirname, "../../input.txt"))
  .toString()
  .trim()
  .split(" ");

const [n, k] = input.map((el) => +el);

function solution(n, k) {
  const queue = Array(n)
    .fill(0)
    .map((_, idx) => idx + 1);
  const answer = [];
  let flag = 1;

  while (queue.length !== 0) {
    if (flag === k) {
      const popped = queue.shift();
      answer.push(popped);
      flag = 1;
    } else {
      const popped = queue.shift();
      queue.push(popped);
      flag++;
    }
  }

  return `<${answer.join(", ")}>`;
}

console.log(solution(n, k));
