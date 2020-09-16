/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = normal;

// using recurse or loop
function normal(num) {
  let ans = num;
  while (ans >= 10) {
    let temp = ans;
    let r = 0;
    while (temp > 0) {
      r += temp % 10;
      temp = (temp / 10) | 0;
    }
    ans = r
  }
  return ans;
}
// @lc code=end
console.log(addDigits(38))