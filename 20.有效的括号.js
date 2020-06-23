/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
const match = {
  "(": ")",
  "[": "]",
  "{": "}",
};
var isValid = function (s) {
  const stack = [];
  let i = 0;
  while (i < s.length) {
    const c = s[i];
    if (match[c]) {
      stack.push(c);
    } else {
      const poped = stack.pop();
      if (match[poped] !== c) {
        return false;
      }
    }
    i++
  }
  return stack.length === 0
};
// @lc code=end
