// 자료구조 - 에디터 (백준 1406번)

// 1. 이중 스택을 이용하여 풀었다.
// 2. 커서를 기점으로 명령어에 따라 양쪽 스택에 추가, 삭제, 이동을 한다.
// 3. 명령어를 모두 실행 후 두 개의 스택을 합친다.

const path = require("path");

const input = require("fs")
  .readFileSync(path.resolve(__dirname, "../../input.txt"))
  .toString()
  .trim()
  .split("\n");

// str: 문자열 cmd: 명령어 리스트
const str = input[0];
const cmd = input.slice(2);
// 스택 left, right
const left = str.split("");
const right = [];

function solution(command) {
  command.forEach((el) => {
    const cmd = el[0];

    switch (cmd) {
      case "L":
        return cmd_L();
      case "P":
        return cmd_P(el);
      case "D":
        return cmd_D();
      case "B":
        return cmd_B();
    }
  });

  console.log([...left, ...right.reverse()].join(""));
}

solution(cmd);

// 헬퍼 함수
function cmd_P(cmd) {
  const value = cmd[2];
  left.push(value);
}

function cmd_L() {
  if (left.length !== 0) {
    const popped = left.pop();
    right.push(popped);
  }
}

function cmd_D() {
  if (right.length !== 0) {
    const popped = right.pop();
    left.push(popped);
  }
}

function cmd_B() {
  if (left.length !== 0) {
    left.pop();
  }
}
