/*
 * @lc app=leetcode.cn id=224 lang=javascript
 *
 * [224] 基本计算器
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  const stack = [];
  let char;
  let sign = 1;
  let buffer = ''
  for (let i = 0; i < s.length; i++) {
    char = s[i];
    if (char === '(' || char === ')' || char === ' ') {
      continue;
    }
    if (char === '+' || char === '-') {
      sign = char === '+'?1:-1;
    }
  }
};
// @lc code=end

