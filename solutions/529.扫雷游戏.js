/*
 * @lc app=leetcode.cn id=529 lang=javascript
 *
 * [529] 扫雷游戏
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function (board, click) {
  if (board.length === 0 || board[0].length === 0) return board;
  const clickX = click[1],
    clickY = click[0];
  if (board[clickY][clickX] === "M") {
    board[clickY][clickX] = "X";
    return board;
  }
  const dfs_x = [1, -1, 0, 0, -1, 1, 1, -1];
  const dfs_y = [0, 0, 1, -1, -1, -1, 1, 1];
  function dfs(x, y) {
    let count = 0;
    for (let i = 0; i < 8; i++) {
      let _x = x + dfs_x[i];
      let _y = y + dfs_y[i];
      if (_x < 0 || _y < 0 || _y >= board.length || _x >= board[0].length) {
        continue;
      }
      // 由于只有 M E B不需要考虑 X
      if (board[_y][_x] === "M") {
        count++;
      }
    }
    if (count > 0) {
      board[y][x] = count + "";
    } else {
      board[y][x] = "B";
      for (let i = 0; i < 8; i++) {
        let _x = x + dfs_x[i];
        let _y = y + dfs_y[i];
        if (
          _x < 0 ||
          _y < 0 ||
          _y >= board.length ||
          _x >= board[0].length ||
          board[_y][_x] === "B" ||
          board[_y][_x] > 0
        ) {
          continue;
        }
        dfs(_x, _y);
      }
    }
  }
  dfs(clickX, clickY);
  return board;
};
// @lc code=end

console.log(
  updateBoard(
    [
      ["E", "E", "E", "E", "E"],
      ["E", "E", "M", "E", "E"],
      ["E", "E", "E", "E", "E"],
      ["E", "E", "E", "E", "E"],
    ],
    [3, 0]
  )
);
