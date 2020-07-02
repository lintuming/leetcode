/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s=s.replace(/[^a-zA-Z0-9]/g, (sub) => {
    return "";
  }).toLowerCase();
  let i = 0,
    j = s.length - 1;
  while (i <= j) {
    if (s[i] !== s[j]) return false;
    i++;
    j--
  }
  return true
};
// @lc code=end
console.log(isPalindrome("abba"))