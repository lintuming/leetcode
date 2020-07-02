/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */



var totalNQueens = function (n) {
  let solotions = 0;
  const buffer = [];

  function canPlaced(col, row) {
    if (buffer.length === 0) return true;
    return buffer.every((placedRow, placedCol) => {
      const offset = (col - placedCol);
      return (
        placedRow !== row &&
        placedRow !== row - offset &&
        placedRow !== row + offset
      );
    });
  }

  function backTrack(col) {
    if (col >= n) {
      return solotions++;
    }
    for (let i = 0; i < n; i++) {
      if (canPlaced(col, i)) {
        buffer.push(i);
        backTrack(col + 1);
        buffer.pop();
      }
    }
  }
  backTrack(0);
  return solotions;
};
// @lc code=end
console.log(totalNQueens(4));
