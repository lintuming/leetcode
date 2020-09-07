/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function s2(s) {
  if (s[0] === "0") {
    return 0;
  }
  const dp = [1];
  for (let i = 1; i < s.length; i++) {
    const pair = s.slice(i - 1, i + 1);
    if (pair > 26 && s[i] === "0") {
      return 0;
    }
    dp[i] =
      (s[i] === "0" ? 0 : dp[i - 1]) +
      (pair <= 26 && s[i - 1] !== "0" ? dp[i - 2] || 1 : 0);
  }
  return dp[s.length - 1]
};

function s1(s) {
  if (s[0] === "0") return 0;
  // dp[i]表示i有几种编码方式
  const dp = [1];
  for (let i = 1; i < s.length; i++) {
    const sum = s[i - 1] + s[i];
    if (s[i] === "0" && sum > 26) return 0;
    dp[i] =
      (s[i] === "0" ? 0 : dp[i - 1]) +
      (sum <= 26 && s[i - 1] !== "0" ? dp[i - 2] || 1 : 0);
  }
  return dp[s.length - 1];
}
// @lc code=end
console.log(numDecodings("226"));
console.log(numDecodings("50926"));
