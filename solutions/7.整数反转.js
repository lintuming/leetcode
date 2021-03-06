/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
const MIN = -(2 ** 31);
const MAX = 2 ** 31 - 1;
var reverse = function s2(num) {
  let ans = 0;
  let sign = Math.sign(num);
  num = Math.abs(num);
  while (num !== 0) {
    const n = num % 10;
    num = Math.floor(num / 10);
    ans = ans * 10 + n;
  }
  ans = sign * ans;
  return ans > MAX || ans < MIN ? 0 : ans;
};

function s1(x) {
  const sign = x < 0 ? -1 : 1;
  x = Math.abs(x) + "";
  let result = 0;
  for (let i = 0; i < x.length; i++) {
    result = result + Number(x[i]) * 10 ** i;
  }
  result = sign * result;
  return result > MAX || result < MIN ? 0 : result;
}
// @lc code=end
console.log(reverse(-123));
