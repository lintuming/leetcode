/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const duplicate = {};
  function happify(n) {
    n = n + "";
    let ans = 0;
    for (const char of n) {
      ans += char ** 2;
    }
    return ans
  }
  while (n !== 1 && !duplicate[n]) {
    duplicate[n] = true;
    n = happify(n);
  }
  return n === 1
};
// @lc code=end
console.log(isHappy(19))