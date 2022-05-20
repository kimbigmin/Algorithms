// 자료구조 1 - 단어 뒤집기 @@@@@@@@@@@@@@@@
// let input = require("fs").readFileSync("./note.txt").toString().split("\n");

// const testCasesNum = input[0];
// const testCases = input.slice(1);

// function solution(sentance) {
//   const answer = sentance
//     .split(" ")
//     .map((word) => word.split("").reverse().join(""));

//   return answer.join(" ");
// }

// for (let i = 0; i < testCases.length; i++) {
//   console.log(solution(testCases[i]));
// }

// 자료구조 1 - 괄호 @@@@@@@@@@@@@@@@
// let input = require("fs")
//   .readFileSync("./note.txt")
//   .toString()
//   .trim()
//   .split("\n");

// const num = input[0];
// const inputData = input.slice(1);

// function solution(parenthesis) {
//   const stack = [];

//   for (let i = 0; i < parenthesis.length; i++) {
//     if (parenthesis[i] === ")") {
//       if (stack[stack.length - 1] === "(") {
//         stack.pop();
//       } else {
//         stack.push(parenthesis[i]);
//       }
//     } else {
//       stack.push(parenthesis[i]);
//     }
//   }

//   return stack.length === 0 ? "YES" : "NO";
// }

// inputData.forEach((el) => {
//   console.log(solution(el));
// });

// 자료구조 1 - 스택 수열 @@@@@@@@@@@@@@

// const input = require("fs")
//   .readFileSync("./note.txt")
//   .toString()
//   .trim()
//   .split("\n");

// const num = input[0];
// const sequence = input.slice(1);

// function solution(num, stack) {
//   const answerStack = [];
//   const numberStack = Array(Number(num))
//     .fill(null)
//     .map((_, i) => String(i + 1))
//     .reverse();

//   const answer = [];
//   const checkList = [];

//   for (let i = 0; i < stack.length; i++) {
//     while (
//       !(
//         numberStack.length === 0 &&
//         answerStack[answerStack.length - 1] !== stack[i]
//       )
//     ) {
//       if (answerStack[answerStack.length - 1] !== stack[i]) {
//         const popped = numberStack.pop();
//         answerStack.push(popped);
//         answer.push("+");
//       } else {
//         const val = answerStack.pop();
//         checkList.push(val);
//         answer.push("-");
//         break;
//       }
//     }
//   }
//   if (stack.length === checkList.length) {
//     answer.forEach((el) => {
//       console.log(el);
//     });
//   } else {
//     console.log("NO");
//   }
// }

// solution(num, sequence);

// 1로 만들기 - 다이나믹 프로그래밍

// const input = require("fs")
//   .readFileSync("./note.txt")
//   .toString()
//   .trim()
//   .split(" ");

// function solution(input) {
//   input = Number(input);
//   const dp = Array(input + 1).fill(0);

//   for (let i = 2; i <= input; i++) {
//     dp[i] = dp[i - 1] + 1;

//     if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
//     if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
//   }

//   return dp[input];
// }

// console.log(solution(input));

// const input = Number(require("fs").readFileSync("./note.txt").toString());

// function solution(input) {
//   const DP = Array(input + 1).fill(0);
//   DP[1] = 1;
//   DP[2] = 3;
//   for (let i = 3; i <= input; i++) {
//     DP[i] = (DP[i - 1] + 2 * DP[i - 2]) % 10007;
//   }

//   return DP[input];
// }

// console.log(solution(input));

//===================================================================

// const input = require("fs")
//   .readFileSync("./note.txt")
//   .toString()
//   .trim()
//   .split("\n");
// const num = input[0];
// const testCases = input.slice(1);

// function solution(num) {
//   const DP = Array(num + 1).fill(0);
//   DP[0] = 1;
//   DP[1] = 1;
//   DP[2] = 2;

//   for (let i = 3; i <= num; i++) {
//     DP[i] = DP[i - 3] + DP[i - 2] + DP[i - 1];
//   }

//   return DP[num];
// }

// testCases.forEach((el) => {
//   console.log(solution(el));
// });

// ----------- 최대공약수, 최소공배수 구하기
// const input = require("fs")
//   .readFileSync("./note.txt")
//   .toString()
//   .trim()
//   .split(" ");

// let [num1, num2] = input;

// num1 = +num1;
// num2 = +num2;

// function getGCD(a, b) {
//   const remainder = a % b;
//   if (remainder === 0) return b;

//   return getGCD(b, remainder);
// }

// function solution(a, b) {
//   const gcd = getGCD(a, b);
//   const lcm = gcd * (a / gcd) * (b / gcd);

//   return [gcd, lcm];
// }

// const answer = solution(num1, num2);

// answer.forEach((el) => console.log(el));

// ---------------@@@@@------ 최소공배수 구하기
// const input = require("fs")
//   .readFileSync("./note.txt")
//   .toString()
//   .trim()
//   .split("\n");

// const num = input[0];

// const cases = input.slice(1).map((el) => el.split(" "));

// function getGCD(a, b) {
//   const remainder = a % b;
//   if (remainder === 0) return b;

//   return getGCD(b, remainder);
// }

// function solution(a, b) {
//   const gcd = getGCD(a, b);
//   const lcm = gcd * (a / gcd) * (b / gcd);

//   return lcm;
// }

// cases.forEach((el) => {
//   console.log(solution(+el[0], +el[1]));
// });

//----------소수 찾기 -------

// const input = require("fs").readFileSync("./note.txt").toString().split("\n");

// const num = +input[0];
// const cases = input[1].split(" ").map((el) => +el);

// function getPrimes(n) {
//   const arr = Array(n + 1).fill(true);
//   arr[0] = false;
//   arr[1] = false;

//   for (let i = 2; i <= n; i++) {
//     if (arr[i] === true) {
//       for (let j = 2; j <= n / i; j++) {
//         arr[i * j] = false;
//       }
//     }
//     continue;
//   }

//   return arr;
// }

// function solution(cases) {
//   const primes = getPrimes(1000);
//   let answer = 0;

//   cases.forEach((el) => {
//     if (primes[el]) answer++;
//   });

//   return answer;
// }

// console.log(solution(cases));

//----- 소수 구하기 ----

// const input = require("fs").readFileSync("./note.txt").toString().split(" ");

// const startNum = +input[0];
// const endNum = +input[1];

// function getPrimes(n) {
//   const arr = Array(n + 1).fill(true);
//   arr[0] = false;
//   arr[1] = false;

//   for (let i = 2; i <= n; i++) {
//     if (arr[i] === true) {
//       for (let j = 2; j <= n / i; j++) {
//         arr[i * j] = false;
//       }
//     }
//     continue;
//   }

//   return arr;
// }

// function solution(start, end) {
//   const primes = getPrimes(end);
//   let answer = [];

//   for (let i = start; i <= end; i++) {
//     if (primes[i]) answer.push(i);
//   }

//   return answer;
// }

// console.log(solution(startNum, endNum).join("\n")); // 출력시 새로 배운 점

// 골드바흐의 추측 ------------------------------------------------------------

// const input = require("fs")
//   .readFileSync("./note.txt")
//   .toString()
//   .trim()
//   .split("\n");

// const cases = input.splice(0, input.length - 1);

// // 소수 구하기
// const getPrimes = (maxNum) => {
//   const primes = Array(maxNum + 1).fill(true);
//   primes[0] = false;
//   primes[1] = false;

//   for (let i = 2; i < Math.sqrt(primes.length); i++) {
//     if (primes[i]) {
//       for (let j = 2; j <= primes.length / i; j++) {
//         primes[i * j] = false;
//       }
//     }
//     continue;
//   }

//   return primes;
// };

// function solution(cases) {
//   // 불리언으로 이루어진 소수 판별 변수
//   const prime = getPrimes(Math.max(...cases));
//   // 소수를 숫자로 변경한 변수
//   const primeNums = prime
//     .map((el, idx) => {
//       return el ? idx : null;
//     })
//     .filter((el) => el)
//     .slice(1);

//   // 정답 문자열을 담는 answer 변수
//   const answer = [];

//   for (let i = 0; i < cases.length; i++) {
//     let index = 0;
//     while (cases[i] / 2 >= primeNums[index]) {
//       const diffNum = cases[i] - primeNums[index];
//       if (prime[diffNum]) {
//         answer.push(`${cases[i]} = ${primeNums[index]} + ${diffNum}`);
//         break;
//       }
//       index++;
//     }
//     if (cases[i] / 2 < primeNums[index]) {
//       answer.push("Goldbach's conjecture is wrong.");
//     }
//   }

//   return answer;
// }

// console.log(solution(cases).join("\n"));

// 팩토리얼 재귀버전 (콜스택 오버플로 에러 발생 )---------------------------------------------
// const input = require("fs").readFileSync("./note.txt").toString().trim();

// function solution(n) {
//   if (n === 0) {
//     return 1;
//   } else {
//     if (n === 1) {
//       return 1;
//     }
//     return n * solution(n - 1);
//   }
// }

// console.log(solution(input));

// 팩토리얼 for문 버전 (통과)---------------------------------------------
// const input = require("fs").readFileSync("./note.txt").toString().trim();

// function solution(n) {
//   let answer = 1;
//   for (let i = n; i >= 1; i--) {
//     answer *= i;
//   }
//   return answer;
// }

// console.log(solution(input));

// const zeroNum = String(solution(input))
//   .split("")
//   .reverse()
//   .join("")
//   .match(/^0+/);

// console.log(zeroNum ? zeroNum[0].length : 0);

// 팩토리얼 0의 개수 ----------- (@@@ 못 푼 문제 @@@)
const input = require("fs").readFileSync("./note.txt").toString().trim();

const solution = (n) => {
  let answer = 0;

  for (let i = 5; i <= n; i *= 5) {
    answer += Math.floor(n / i);
  }

  console.log(answer);
};

solution(input);
