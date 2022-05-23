const path = require("path");
const input = require("fs")
  .readFileSync(path.resolve(__dirname, "../../input.txt"))
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const arr = input.slice(1).map((el) => el.split(""));

function solution(arr) {
  let answer = 0;

  const direction = [
    [0, 1], // right
    [1, 0], // down
    [-1, 0], // up
    [0, -1], // left
  ];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      const pos = [i, j];

      direction.forEach(([x, y]) => {
        const [currentX, currentY] = pos;
        const nextX = pos[0] + x;
        const nextY = pos[1] + y;

        if (nextX >= 0 && nextY >= 0 && nextX < N && nextY < N) {
          // 서로 다른 값이면 코드 실행
          if (arr[nextX][nextY] !== arr[currentX][currentY]) {
            // 1. 스왑할 값들 변수로 저장
            const swap = arr[nextX][nextY];
            const cnt = arr[currentX][currentY];
            // 2. 값 스왑
            arr[currentX][currentY] = swap;
            arr[nextX][nextY] = cnt;
            // 3. 서로 값을 스왑한 상태에서 가장 많은 연속 수 찾기
            const rowMax = getRowMax(arr);
            const colMax = getColMax(arr);
            answer = Math.max(answer, rowMax, colMax);
            // 4. 다시 제자리로 복귀
            arr[currentX][currentY] = cnt;
            arr[nextX][nextY] = swap;
          }
        }
      });
    }
  }

  return answer;
}

console.log(solution(arr));

// 행에서 가장 많은 숫자 찾기
function getRowMax(list) {
  let max = 0;

  for (let i = 0; i < list.length; i++) {
    let sequence = 1;
    for (let j = 0; j < list.length; j++) {
      if (j > 0 && arr[i][j - 1] === arr[i][j]) {
        sequence++;
        max = Math.max(max, sequence);
      } else {
        max = Math.max(max, sequence);
        sequence = 1;
      }
    }
  }

  return max;
}

// 열에서 가장 많은 숫자 찾기
function getColMax(list) {
  let max = 0;

  for (let i = 0; i < list.length; i++) {
    let sequence = 1;
    for (let j = 0; j < list.length; j++) {
      if (j > 0 && arr[j - 1][i] === arr[j][i]) {
        sequence++;
        max = Math.max(max, sequence);
      } else {
        max = Math.max(max, sequence);
        sequence = 1;
      }
    }
  }

  return max;
}
