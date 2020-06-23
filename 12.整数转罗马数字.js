/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
const entries = [
  [1, "I"],
  [4, "IV"],
  [5, "V"],
  [9, "IX"],
  [10, "X"],
  [40, "XL"],
  [50, "L"],
  [90, "XC"],
  [100, "C"],
  [400, "CD"],
  [500, "D"],
  [900, "CM"],
  [1000, "M"],
].reverse();
var intToRoman = function (num) {
  const mapping = new Map(entries);
  let result = "";
  for (const [n, letter] of mapping.entries()) {
    if (num >= n) {
      result += letter.repeat((num / n) | 0);
      num = num % n;
    }
  }
  return result;
};
// @lc code=end
console.log(intToRoman(1994));
