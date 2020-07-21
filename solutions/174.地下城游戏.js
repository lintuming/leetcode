/*
 * @lc app=leetcode.cn id=174 lang=javascript
 *
 * [174] 地下城游戏
 */

// @lc code=start
/**
 * @param {number[][]} dungeon
 * @return {number}
 */


var calculateMinimumHP = function (dungeon) {
  // dp[i][j] 表示 i j 走到 尽头需要多少血量
// 当走到dungeon[i][j]  时，我们选择dungeon[i+1][j] dungeon[i][j+1] 的最小血量min
// 如果dungeon[i][j] 是整数,  能够补充血量，min - dungeon[i][j]
// 如果dungeon[i][j] 是负数， 需要更多血量, min + dungeon[i][j]
// 由于dungeo[i][j] 本身有正负表示,所以 min + - 1 * dungeon[i][j]
// 考虑dungeon[i][j] 是整数时,有可能补完全部的学， 所以min + -1 * dungeon[I][J]有可能是负数，取0
  const dp = Array.from({ length: dungeon.length }, () => []);
  let ymax = dungeon.length - 1;
  let xmax = dungeon[0].length - 1;
  for (let i = ymax; i >= 0; i--) {
    for (let j = xmax; j >= 0; j--) {
      if (i === ymax && j === xmax) {
        dp[i][j] = Math.max(0,-1 * dungeon[i][j]);
      } else {
        let min = Number.MAX_SAFE_INTEGER;
        if (j + 1 <= xmax) {
          min = Math.min(min, dp[i][j + 1]);
        }
        if (i + 1 <= ymax) {
          min = Math.min(min, dp[i + 1][j]);
        }
        dp[i][j] = Math.max(0,min + -1 * dungeon[i][j]);
      }
    }
  }
  return dp[0][0] + 1
};
// @lc code=end

console.log(
  calculateMinimumHP([
    [-2, -3, 3],
    [-5, -10, 1],
    [10, 30, -5],
  ])
);
console.log(
  calculateMinimumHP([
    [100]
  ])
);