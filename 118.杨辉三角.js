/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows === 0) return [];
  const ans = [[1]];
  let i = 1;
  while (i < numRows) {
    const buffer = [];
    for (let j = 0; j < i+1; j++) {
      buffer[j] = (ans[i - 1][j - 1] || 0) + (ans[i - 1][j] || 0);
    }
    ans.push(buffer);
    i++;
  }
  return ans;
};
// @lc code=end
console.log(generate(7))