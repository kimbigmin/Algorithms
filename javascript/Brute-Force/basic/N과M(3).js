const path = require("path");

const input = require("fs")
  .readFileSync(path.resolve(__dirname, "../../input.txt"))
  .toString()
  .trim()
  .split(" ");

const [N, M] = input;

const output = [];
let result = "";

function dfs(cnt) {
  if (cnt === +M) {
    result += `${output.join(" ")}\n`;
    return;
  }

  for (let i = 0; i < +N; i++) {
    output.push(i + 1);
    dfs(output.length);
    output.pop();
  }
}

dfs(0);
console.log(result.trim());

/* Node.js(JavaScript)로 알고리즘을 풀 때, console.log()가 '시간 초과'에 많은 영향을 준다. 수가 큰 알고리즘 문제를 풀 때는, str 변수를 만들어 모든 결과값을 적절하게 저장해놓고
 마지막에 console.log() 단 한 번으로 해결하는 것이 좋다. 아니 그렇게 해야 한다. */
