/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  const dp = Array.from({ length: matrix.length }, () => []);
  let maxArea = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        row[j] = 0;
        column[j] = 0;
        continue;
      }
      row[j] = (row[j - 1] || 0) + 1;
      column[j] = (column[j] || 0) + 1;
    }
    console.log(row, column);
  }
  return maxArea;
};
// @lc code=end

console.log(
  maximalSquare([
    [1, 0, 1, 0, 0],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 0, 0, 1, 0],
  ])
);
