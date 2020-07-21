/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  version2 = version2.split(".");
  version1 = version1.split(".");
  const l = Math.max(version1.length, version2.length);
  let v1, v2;
  for (let i = 0; i < l; i++) {
    v1 = Number(version1[i] || 0);
    v2 = Number(version2[i] || 0);
    
    if (v1 > v2) {
      return 1;
    } else if (v1 < v2) {
      return -1;
    }
  }
  return 0
};
// @lc code=end
// console.log(compareVersion('0.1','1.1'));
// console.log(compareVersion('1.0.1','1'));
// console.log(compareVersion("7.5.2.4","7.5.3"));
console.log(compareVersion("1.01","1.001"));



