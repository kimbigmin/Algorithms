// 중복 순열 문제 - 비내림차순

const path = require("path");

const input = require("fs")
  .readFileSync(path.resolve(__dirname, "../../input.txt"))
  .toString()
  .trim()
  .split(" ");

const [N, M] = input;

const output = [];
let result = "";

function dfs(cnt, start) {
  if (cnt === +M) {
    result += `${output.join(" ")}\n`;
    return;
  }

  for (let i = start; i < +N; i++) {
    output.push(i + 1);
    dfs(output.length, i);
    output.pop();
  }
}

dfs(0, 0);
console.log(result.trim());
