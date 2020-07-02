/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      if (y === 0) {
        grid[y][x] = (grid[y][x - 1] || 0) + grid[y][x];
        continue;
      }
      if (x === 0) {
        grid[y][x] = (grid[y - 1][x] || 0) + grid[y][x];
        continue;
      }
      grid[y][x] = Math.min(grid[y - 1][x], grid[y][x - 1]) + grid[y][x];
    }
  }
  return grid[grid.length - 1][grid[0].length - 1];
};
// @lc code=end
console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ])
);
