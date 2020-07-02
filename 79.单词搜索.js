/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  if (board.length === 0 || word.length === 0) return false;
  const yBound = board.length;
  const xBound = board[0].length;

  for (let i = 0; i < yBound; i++) {
    for (let j = 0; j < xBound; j++) {
      if (search(i, j, 0)) {
        return true;
      }
    }
  }
  return false;
  function search(y, x, i) {
    if (y < 0 || x < 0 || y >= yBound || x >= xBound || board[y][x] === "-") {
      return false;
    }
    const char = board[y][x];
    const w = word[i];
    if (char === w) {
      const next = i + 1;
      if (next >= word.length) {
        return true;
      }
      board[y][x] = "-";
      const r =
        search(y, x - 1, next) ||
        search(y, x + 1, next) ||
        search(y + 1, x, next) ||
        search(y - 1, x, next);
      board[y][x] = char;
      return r;
    } else {
      return false;
    }
  }
};
// @lc code=end
console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED"
  )
);
console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "SEE"
  )
);
console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCB"
  )
);
