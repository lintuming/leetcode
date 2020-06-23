/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
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
const map = new Map(entries);
var romanToInt = function (s) {
  let result = 0;
  for (const [n, letter] of map.entries()) {
    let l = letter.length;
    while (s.slice(0, l) === letter) {
      result += n;
      s = s.slice(l);
    }
  }
  return result
};
// @lc code=end
console.log(romanToInt('III'))
console.log(romanToInt('IV'))
console.log(romanToInt('IX'))
console.log(romanToInt('LVIII'))
console.log(romanToInt('MCMXCIV'))
