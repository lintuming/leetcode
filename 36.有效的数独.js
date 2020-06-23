/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const column = [];
  const row = [];
  const rect = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const n = board[i][j];
      if (n === ".") continue;
      if (column[i] && column[i].has(n)) {
        return false;
      } else {
        column[i] = column[i] || new Map();
        column[i].set(n,true);
      }
      if (row[j] && row[j].has(n)) {
        return false;
      } else {
        row[j] = row[j] || new Map();
        row[j].set(n, true);
      }
      const r = 3 * Math.floor(i / 3) + Math.floor(j / 3);
      if (rect[r] && rect[r].has(n)) {
        return false;
      } else {
        rect[r] = rect[r] || new Map();
        rect[r].set(n, true);
      }
    }
  }
  return true;
};
// @lc code=end
console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
