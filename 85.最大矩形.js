/*
 * @lc app=leetcode.cn id=85 lang=javascript
 *
 * [85] 最大矩形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  let max = 0;
  if (matrix.length === 0) return max;
  const buffer = [];
  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      const m = matrix[j][i];
      if (m === "0") {
        buffer[j] = 0;
      } else {
        buffer[j] = (buffer[j] || 0) + 1;
      }
      let c = j;
      let min = buffer[j];
      while (c >= 0 && matrix[c][i] === "1") {
        min = Math.min(min, buffer[c]);
        max = Math.max(max, min * (j - c + 1));
        c--;
      }
    }
  }
  return max;
};
// @lc code=end
console.log(
  maximalRectangle([
    ["1", "0", "1", "0", "0"],
    ["1", "1", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"],
  ])
);

console.log(maximalRectangle([["1"]]));
console.log(maximalRectangle([["0"]]));
console.log(
  maximalRectangle([
    ["1", "0", "1", "1", "1"],
    ["0", "1", "0", "1", "0"],
    ["1", "1", "0", "1", "1"],
    ["1", "1", "0", "1", "1"],
    ["0", "1", "1", "1", "1"],
  ])
);
