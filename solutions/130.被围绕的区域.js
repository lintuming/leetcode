/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] 被围绕的区域
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  if (board.length === 0) return board;
  const yl = board.length;
  const xl = board[0].length;
  function mark(y, x) {
    if (y < 0 || x < 0 || y >= yl || x >= xl || board[y][x] !== "O") {
      return;
    }
    board[y][x] = "-";
    mark(y + 1, x);
    mark(y - 1, x);
    mark(y, x + 1);
    mark(y, x - 1);
  }
  for (let i = 0; i < yl; i++) {
    if (i === 0 || i === yl - 1) {
      for (let j = 0; j < xl; j++) {
        if (board[i][j] === "O") {
          mark(i, j);
        }
      }
    } else {
      if (board[i][0] === "O") mark(i, 0);
      if (board[i][xl - 1] === "O") mark(i, xl - 1);
    }
  }

  for (let i = 0; i < yl; i++) {
    for (let j = 0; j < xl; j++) {
      if (board[i][j] === "X") continue;
      if (board[i][j] === "-") {
        board[i][j] = "O";
      } else if (board[i][j] === "O") board[i][j] = "X";
    }
  }
  return board;
};
// @lc code=end
console.log(
  solve([
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "X", "X"],
  ])
);
