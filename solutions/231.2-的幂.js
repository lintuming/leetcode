/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n === 0 || n < 0) return false;
  return (n & ~(n & -n)) === 0;
};
// @lc code=end

console.log(isPowerOfTwo(3));
