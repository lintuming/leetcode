/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const placements = [];
  const buffer = [];
  function canPlaceQueen(column, row) {
    if (buffer.length === 0) return true;
    return buffer.every((placedRow, placedColumn) => {
      const offset = column - placedColumn;
      return (
        placedRow !== row &&
        placedRow !== row + offset &&
        placedRow !== row - offset
      );
    });
  }
  function backTrack(c) {
    if (c >= n) {
      return placements.push(
        buffer.map(
          (placedRow) =>
            ".".repeat(placedRow) + "Q" + ".".repeat(n - 1 - placedRow)
        )
      );
    }
    for (let i = 0; i < n; i++) {
      if (canPlaceQueen(c, i)) {
        buffer.push(i);
        backTrack(c + 1);
        buffer.pop();
      }
    }
  }
  backTrack(0);
  return placements;
};
// @lc code=end
console.log(solveNQueens(4));
