// 자료구조 - 큐 (백준 10845번)

const path = require("path");

const input = require("fs")
  .readFileSync(path.resolve(__dirname, "../../input.txt"))
  .toString()
  .trim()
  .split("\n");

// 명령어 리스트
const cmd = input.slice(1);

// 큐 클래스 정의
class Queue {
  constructor() {
    this.queue = [];
  }

  push(cmd) {
    const val = cmd.split(" ")[1];
    this.queue.push(val);
  }

  pop() {
    if (this.queue.length !== 0) {
      const popped = this.queue[0];
      this.queue = this.queue.slice(1);
      return popped;
    } else {
      return -1;
    }
  }

  front() {
    if (this.queue.length !== 0) {
      return this.queue[0];
    } else {
      return -1;
    }
  }

  back() {
    if (this.queue.length !== 0) {
      return this.queue[this.queue.length - 1];
    } else {
      return -1;
    }
  }

  size() {
    return this.queue.length;
  }

  empty() {
    return this.queue.length !== 0 ? 0 : 1;
  }
}

// 새로운 큐 객체 생성
const queue = new Queue();
// 정답 리스트 생성
const answer = [];
// 명령어 순서대로 적용
cmd.forEach((el) => {
  const cmd = el.split(" ")[0];

  switch (cmd) {
    case "push":
      queue.push(el);
      break;
    case "pop":
      answer.push(queue.pop());
      break;
    case "front":
      answer.push(queue.front());
      break;
    case "back":
      answer.push(queue.back());
      break;
    case "size":
      answer.push(queue.size());
      break;
    case "empty":
      answer.push(queue.empty());
      break;
  }
});
// 정답 출력
console.log(answer.join("\n"));
