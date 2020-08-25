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
var longestCommonPrefix = s1

function s2(strs) {
  if(!strs.length) return ''
  let common = strs[0];
  for (let i = 1; i < strs.length; i++) {
    const str = strs[i];
    let newCommon = "";
    for (let j = 0; j < common.length; j++) {
      if (common[j] === str[j]) {
        newCommon += common[j];
      } else {
        break;
      }
    }
    common = newCommon;
  }
  return common
};

function s1(strs) {
  let common = "";
  if (strs.length === 0) {
    return common;
  }
  let j = 0;
  const first = strs[0];
  while (j < first.length) {
    let m = first[j];
    for (let i = 1; i < strs.length; i++) {
      if (strs[i][j] !== m) {
        return common;
      }
    }
    common += m;
    j++;
  }
  return common;
}
// @lc code=end
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
