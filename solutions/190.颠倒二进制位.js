/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const cache = {}
var reverseBits = function (n) {
  if(cache[n]!=null) return cache[n]
  let buffer = 0;
  let i = 0;
  while (i <= 31) {
    const mask = 1 << i;
    if (n & mask) {
      buffer += "1";
    } else {
      buffer += "0";
    }
    i++
  }
  cache[n] = parseInt(buffer,2)
  return cache[n]
};
// @lc code=end
