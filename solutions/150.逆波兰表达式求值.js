/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */

function perform(op, a, b) {
  if (op === "+") {
    return Number(a) + Number(b);
  } else if (op === "-") {
    return a - b;
  } else if (op === "/") {
    return (a / b) | 0;
  } else if (op === "*") {
    return a * b;
  }
}

var evalRPN = function (tokens) {
  const stack = [];
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (/^[\/|\-|\+|\*]$/.test(token)) {
      const t2 = stack.pop();
      const t1 = stack.pop();
      stack.push(perform(token, t1, t2));
    } else {
      stack.push(token);
    }
  }
  return stack[0];
};
// @lc code=end
console.log(
  evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
);
