// 브루트포스 문제 - 일곱 난쟁이 (2309번)

const path = require("path");
const input = require("fs")
  .readFileSync(path.resolve(__dirname, "../../input.txt"))
  .toString()
  .trim()
  .split("\n")
  .map((el) => +el);

function solution(list) {
  // 9명의 난쟁이 중 7명을 뽑는 조합을 구한다.
  const combi = getCombinations(list, 7);
  // 조합을 순회하여 100이 나오면 값을 answer에 할당한다.
  const answer = combi.find((el) => {
    return el.reduce((acc, val) => acc + val, 0) === 100;
  });
  // 정렬 후 출력
  return answer.sort((a, b) => a - b).join("\n");
}

console.log(solution(input));

// 조합 구하는 헬퍼 함수
function getCombinations(arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);

    results.push(...attached);
  });

  return results;
}
