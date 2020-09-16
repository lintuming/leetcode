/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const dp = [1];

  for (let i = 2; i <= n; i++) {
    dp[i - 1] = Number.MAX_SAFE_INTEGER;
    for (let j = 1; j < i; j++) {
      dp[i - 1] =
        j * j === i ? 1 : Math.min(dp[i - 1], dp[j - 1] + dp[i - j - 1]);
    }
  }
  return dp[n - 1];
};
// @lc code=end

console.log(numSquares(12));
console.log(numSquares(13));
