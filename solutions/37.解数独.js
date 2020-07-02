/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  const column = Array.from({ length: 9 }, (_, i) =>
    Array.from({ length: 9 }, () => 1)
  );
  const row = Array.from({ length: 9 }, (_, i) =>
    Array.from({ length: 9 }, () => 1)
  );
  const rect = Array.from({ length: 9 }, (_, i) =>
    Array.from({ length: 9 }, () => 1)
  );

  function markAsUsed(n, i, j) {
    column[i][n - 1]--;
    row[j][n - 1]--;
    rect[getRectIndex(i, j)][n - 1]--;
    board[i][j] = String(n);
  }
  function unUsed(n, i, j) {
    column[i][n - 1]++;
    row[j][n - 1]++;
    rect[getRectIndex(i, j)][n - 1]++;
    board[i][j] = ".";
  }
  function getRectIndex(i, j) {
    return 3 * Math.floor(i / 3) + Math.floor(j / 3);
  }
  function shouldFill(n, i, j) {
    return (
      column[i][n - 1] + row[j][n - 1] + rect[getRectIndex(i, j)][n - 1] === 3
    );
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] !== ".") {
        markAsUsed(board[i][j], i, j);
      }
    }
  }

  function backTrack(i, j) {

    const n = board[i][j];
    let nextI = j + 1 < 9 ? i : i + 1;
    let nextJ = j + 1 < 9 ? j + 1 : 0;
    if (n === ".") {
      for (let c = 1; c <= 9; c++) {
        if (shouldFill(c, i, j)) {
          markAsUsed(c, i, j);
          if (i === 8 && j === 8) {
            return true;
          }
          if (backTrack(nextI, nextJ)) {
            return true;
          } else {
            unUsed(c, i, j);
          }
        }
      }
      return false;
    } else {
      if (i === 8 && j === 8) {
        return true;
      }
      return backTrack(nextI, nextJ);
    }
  }
  backTrack(0, 0);
  return board;
};
// @lc code=end
console.log(
  solveSudoku([
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
