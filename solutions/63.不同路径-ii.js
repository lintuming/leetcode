/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  if (obstacleGrid.length === 0 || obstacleGrid[0][0] === 1) return 0;
  let cur = [];
  let prev = [];
  let yMax = obstacleGrid.length - 1;
  let xMax = obstacleGrid[0].length - 1;
  for (let y = yMax; y >= 0; y--) {
    for (let x = xMax; x >= 0; x--) {
      if (y === yMax && x === xMax) {
        if (obstacleGrid[y][x] === 1) return 0;
        cur[x] = 1;
      } else {
        if (obstacleGrid[y][x] === 1) {
          cur[x] = 0;
        } else {
          cur[x] = (cur[x + 1] || 0) + (prev[x] || 0);
        }
      }
    }
    prev = cur;
  }
  return prev[0];
};
// @lc code=end
console.log(
  uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
);
