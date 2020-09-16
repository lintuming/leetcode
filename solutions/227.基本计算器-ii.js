/*
 * @lc app=leetcode.cn id=227 lang=javascript
 *
 * [227] 基本计算器 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function s2(s) {
  const stack = [];
  let op = "+";
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === " ") {
      continue;
    }
    if (/[0-9]/.test(char)) {
      let j = i + 1;
      while (j < s.length && /[0-9]/.test(s[j])) {
        j++;
      }
      const num = s.slice(i, j);
      switch (op) {
        case "+":
          stack.push(1 * num);
          break;
        case "-":
          stack.push(1 * -num);
          break;
        case "*":
          stack.push(stack.pop() * num);
          break;
        case '/':
          stack.push(stack.pop() / num | 0);
          break;
      }
      i = j - 1;
    } else {
      op = char;
    }
  }
  return stack.reduce((a,b) => 1*a + 1*b )
};

function s1(s) {
  const stack = [];
  let char;
  for (let i = 0; i < s.length; i++) {
    char = s[i];
    if (char === " ") {
      continue;
    }
    if (/[\+\-\/\*]/.test(char)) {
      stack.push(char);
    } else {
      let j = i + 1;
      while (j < s.length && /[0-9]/.test(s[j])) {
        j++;
      }
      const num = s.slice(i, j);
      if (stack.length > 0 && /[\*\/]/.test(stack[stack.length - 1])) {
        const op = stack.pop();
        let val = stack.pop();
        stack.push(op === "*" ? val * num : (val / num) | 0);
      } else {
        let sign = stack.length > 0 ? (stack.pop() === "+" ? 1 : -1) : 1;
        stack.push(sign * num);
      }
      i = j - 1;
    }
  }
  while (stack.length > 1) {
    const val1 = stack.pop();
    const val2 = stack.pop();
    stack.push(1 * val2 + 1 * val1);
  }
  return stack[0];
}
// @lc code=end
console.log(calculate(" 1-1+1"));
