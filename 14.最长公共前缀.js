/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let common = "";
  if (strs.length === 0) {
    return common;
  }
  let j = 0;
  const first = strs[0]
  while (j<first.length) {
    let m = first[j];
    for (let i = 1; i < strs.length; i++) {
      if (strs[i][j] !== m) {
        return common;
      }
    }
    common += m;
    j++;
  }
  return common
};
// @lc code=end
console.log(longestCommonPrefix(["flower","flow","flight"]))