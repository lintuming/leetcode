/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = s2;
// recurse
function s1(n) {
  if (n === 1||n===0) return 1;
  return s1(n - 1) + s1(n - 2);
}

// dp
function s2(n) {
  if (n === 0) return 0;
  const dp = [];
  dp[0] = 1;
  for (let i = 1; i <= n; i++) {
    dp[i] = dp[i - 1] + (dp[i - 2] || 0);
  }
  return dp[n]
}
// @lc code=end

console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(1));

