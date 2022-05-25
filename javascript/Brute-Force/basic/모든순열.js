const path = require("path");
const input = require("fs")
  .readFileSync(path.resolve(__dirname, "../../input.txt"))
  .toString()
  .trim()
  .split("\n");

const arr = Array(+input[0])
  .fill(0)
  .map((_, i) => i + 1);

function getPermutations(arr, selectedNumber) {
  const results = [];
  if (selectedNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, selectedNumber - 1);
    const attached = permutations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
}

const permutations = getPermutations(arr, +input[0]);

permutations.forEach((el) => {
  console.log(el.join(" "));
});
