/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel表列序号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  let ans = 0;
  for (let i = 0; i < s.length; i++){
    ans = ans * 26 + s.charCodeAt(i) - 64;
  }
  return ans
};
// @lc code=end

console.log(titleToNumber('ZY'));
console.log(titleToNumber('AB'));
