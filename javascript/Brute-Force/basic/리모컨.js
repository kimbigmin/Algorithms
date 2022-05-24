const path = require("path");
const input = require("fs")
  .readFileSync(path.resolve(__dirname, "../../input.txt"))
  .toString()
  .trim()
  .split("\n");

const target = input[0];
const breakDownNums = input[2]?.split(" ").map((el) => +el);

const notBreakDownNums = Array(10)
  .fill(0)
  .map((_, idx) => {
    return breakDownNums?.includes(idx) ? null : idx;
  })
  .filter((el) => el !== null);

function solution() {
  const targetList = target.split("").map((el) => +el);

  let nearChannel = "";
  let pressNum = 0;

  if (notBreakDownNums.length === 0) return Math.abs(target - 100);

  targetList.forEach((num, idx) => {
    if (isIncludeBreak(num)) {
      const nearNum = getNearNum(num);
      if (!(nearNum === 0 && idx === 0 && target > 10)) {
        nearChannel += nearNum;
        pressNum++;
      }
    } else {
      nearChannel += num;
      pressNum++;
    }
  });

  // target보다 작을 경우 가장 가깝게 채널을 설정해야하므로 가장 큰 값을 이어붙인 값으로 변경한다.
  if (target > Number(nearChannel)) {
    let repeated;

    if (Number(nearChannel) < 10) {
      repeated = String(Math.max(...notBreakDownNums));
    } else if (nearChannel.length < String(target).length) {
      repeated = String(Math.max(...notBreakDownNums)).repeat(
        String(nearChannel).length
      );
    } else {
      repeated =
        String(nearChannel)[0] +
        String(Math.max(...notBreakDownNums)).repeat(
          String(nearChannel).length - 1
        );
    }

    nearChannel =
      Math.abs(repeated - target) > Math.abs(nearChannel - target)
        ? nearChannel
        : repeated;
  } else if (target < Number(nearChannel)) {
    let repeated;

    if (Number(nearChannel) < 10) {
      repeated = String(Math.min(...notBreakDownNums));
    } else {
      repeated =
        String(nearChannel)[0] +
        String(Math.min(...notBreakDownNums)).repeat(
          String(nearChannel).length - 1
        );
    }

    nearChannel =
      Math.abs(repeated - target) > Math.abs(nearChannel - target)
        ? nearChannel
        : repeated;
  }

  const pressNumAndUpDownButton = Math.abs(target - nearChannel) + pressNum;
  const onlyPressUpDownButton = Math.abs(target - 100);

  return Math.min(pressNumAndUpDownButton, onlyPressUpDownButton);
}

console.log(solution());

function isIncludeBreak(num) {
  return breakDownNums?.includes(num);
}

function getNearNum(num) {
  let min = 99999;
  let nearIndex;

  notBreakDownNums?.forEach((el, idx) => {
    const distance = Math.abs(el - num);
    if (distance < min) {
      min = distance;
      nearIndex = idx;
    }
  });

  return notBreakDownNums[nearIndex];
}
