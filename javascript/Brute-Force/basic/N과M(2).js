// 브루트포스 문제 - N과 M (1) - 조합문제

const path = require("path");
const input = require("fs")
  .readFileSync(path.resolve(__dirname, "../../input.txt"))
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

const arr = Array(input[0])
  .fill(0)
  .map((_, i) => i + 1);

function getCombinations(arr, selectedNumber) {
  const results = [];
  if (selectedNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectedNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
}

getCombinations(arr, input[1]).forEach((el) => {
  console.log(el.join(" "));
});
