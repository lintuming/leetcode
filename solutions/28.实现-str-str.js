/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle.length === 0) return 0;
  const l = needle.length;
  for (let i = 0; i <= haystack.length - l; i++) {
     if(haystack.substr(i,l) === needle) {
       return i
     }
  }
  return -1
};
// @lc code=end
console.log(strStr('hello','ll'))