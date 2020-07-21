/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0;
  let i = 0;
  while (i <= 31) {
    const mask = 1 << i;
    i++;
    if (n & mask) {
      count++;
    }
  }
  return count
};
// @lc code=end
