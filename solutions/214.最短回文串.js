/*
 * @lc app=leetcode.cn id=214 lang=javascript
 *
 * [214] 最短回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
  if (isPalindrome(s)) {
    return s;
  }
  let len = 1;
  function isPalindrome(str) {
    let left = 0,
      right = str.length - 1;
    while (left <= right) {
      if (str[left] !== str[right]) return false;
      left++;
      right--;
    }
    return true;
  }
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < 2; j++) {
      let _left = i;
      let _right = i + j;
      if (isPalindrome(s.slice(0, _right + _left + 1))) {
        const _len = _right + _left + 1;
        if (_len > len) {
          len = _len;
        }
      }
    }
  }
  let ans = s;
  for (const char of s.slice(len)) {
    ans = char + ans;
  }
  return ans;
};
// @lc code=end
console.log(shortestPalindrome("aacecaaa"));
console.log(shortestPalindrome("abcd"));
console.log(shortestPalindrome("aabba"));
