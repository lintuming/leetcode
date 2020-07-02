/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  digits[digits.length - 1]++;
  let plus = 0;
  for (let i = digits.length - 1; i >= 0; i--) {
    const d = digits[i] + plus;
    plus = Math.floor(d / 10);
    const rest = d % 10;
    digits[i] = rest;
    if (plus === 0) {
      return digits;
    }
  }
  if (plus !== 0) {
      digits.unshift(plus)
  }
  return digits
};
// @lc code=end
console.log(plusOne([9,9,9]));
console.log(plusOne([1,2,3]));
console.log(plusOne([4,3,2,1]));
