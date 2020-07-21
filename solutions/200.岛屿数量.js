/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let count = 0;
  let ymax = grid.length;
  if (ymax === 0) return count;
  let xmax = grid[0].length;
  function visit(x, y) {
    if (x < 0 || y < 0 || y >= ymax || x >= xmax || grid[y][x] === "0") {
      return;
    }
    grid[y][x] = "0";
    visit(x - 1, y);
    visit(x + 1, y);
    visit(x, y + 1);
    visit(x, y - 1);
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        count++;
        visit(j, i);
      }
    }
  }
  return count;
};
// @lc code=end
