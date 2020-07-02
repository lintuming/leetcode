/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = s2;

function s2(triangle) {
  if (triangle.length === 0) return 0;
  // 自底向上
  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      const c = triangle[i][j];
      triangle[i][j] = Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]) + c;
    }
  }
  return triangle[0][0]
}
// dp
function s1(triangle) {
  if (triangle.length === 0) return 0;
  const len = triangle.length;
  const dp = Array.from({ length: len }, () => []);
  dp[0][0] = triangle[0][0];
  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      const c = triangle[i][j];
      dp[i][j] = Math.min(
        c + (dp[i - 1][j] != null ? dp[i - 1][j] : Number.MAX_SAFE_INTEGER),
        c +
          (dp[i - 1][j - 1] != null
            ? dp[i - 1][j - 1]
            : Number.MAX_SAFE_INTEGER)
      );
    }
  }
  return Math.min(...dp[len - 1]);
}
// @lc code=end
console.log(minimumTotal([[1], [-5, -2], [3, 6, 1], [-1, 2, 4, -3]]));
