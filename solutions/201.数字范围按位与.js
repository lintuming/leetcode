/*
 * @lc app=leetcode.cn id=201 lang=javascript
 *
 * [201] 数字范围按位与
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// 0b00 0b01 0b10 0b11 0b100  0b110
var rangeBitwiseAnd = function s2(m,n){}





function s1(m, n) {
  let shift = 0;
  while (m < n) {
    m >>= 1;
    n >>= 1;
    shift++
  }
  return n << shift;
};
// @lc code=end

console.log(rangeBitwiseAnd(5, 7));
