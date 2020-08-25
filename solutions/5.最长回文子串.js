/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let longest = "";
  let char,
    i = 0;
  for (; i < s.length; i++) {
    char = s[i];

    for (let j = 0; j < 2; j++) {
      let left = i;
      let right = i + j;
      while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
      }
      if (right - left - 1 > longest.length) {
        longest = s.slice(left + 1, right);
      }
    }
  }
  return longest
};
// @lc code=end
console.log(longestPalindrome('cbbd'))