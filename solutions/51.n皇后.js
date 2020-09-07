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
var solveNQueens = function s2(n) {
  const ans = [];
  const buffer = [];
  function backTrack(y) {
    if (y >= n) {
      return ans.push(buffer.map((x)=>`${'.'.repeat(x)}Q${'.'.repeat(n - x - 1)}`));
    }
    for (let i = 0; i < n; i++) {
      if (
        buffer.every((xIndex, yIndex) => {
          return (
            xIndex !== i &&
            i + (y - yIndex) !== xIndex &&
            i - (y - yIndex) !== xIndex
          );
        })
      ) {
        buffer.push(i);
        backTrack(y + 1);
        buffer.pop();
      }
    }
  }
  backTrack(0);
  return ans
};

// function s1(n) {
//   const placements = [];
//   const buffer = [];
//   function canPlaceQueen(column, row) {
//     if (buffer.length === 0) return true;
//     return buffer.every((placedRow, placedColumn) => {
//       const offset = column - placedColumn;
//       return (
//         placedRow !== row &&
//         placedRow !== row + offset &&
//         placedRow !== row - offset
//       );
//     });
//   }
//   function backTrack(c) {
//     if (c >= n) {
//       return placements.push(
//         buffer.map(
//           (placedRow) =>
//             ".".repeat(placedRow) + "Q" + ".".repeat(n - 1 - placedRow)
//         )
//       );
//     }
//     for (let i = 0; i < n; i++) {
//       if (canPlaceQueen(c, i)) {
//         buffer.push(i);
//         backTrack(c + 1);
//         buffer.pop();
//       }
//     }
//   }
//   backTrack(0);
//   return placements;
// };
// @lc code=end
console.log(solveNQueens(4));
