/*
 * @lc app=leetcode.cn id=115 lang=javascript
 *
 * [115] 不同的子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  if (t.length > s.length) return false;
  // dp[i][j] 表示 s i 之前的字符串 有多少种组成 t j之前的字符串的可能;
  const dp = Array.from({ length: s.length + 1 }, () =>
    Array.from({ length: t.length + 1 }, () => 0)
  );
  dp[0][0] = 1;
  for (let i = 0; i <= s.length; i++) {
    for (let j = 0; j <= i&&j<=t.length; j++) {
      if (j === 0) {
         // j===0 意味着 组成''   s有且最有一种组成可能，就是全部删除
        dp[i][j] = 1;
      } else if (i === 0) {
          // i === 0 意味着 由 '' 组成 t 没有组合可能
        dp[i][j] = 0;
      }else{
        // s[i-1] === t[j-1] 意味着 可以保留不删除,需要观察 i-1之前的字符串能组成多少j-1的字符串
        // dp[i-1][j] 意味着 删除 s[i-1]位置的字符串,那么组成方法由 i-1 之前的字符窜能组成多少j之前的
        dp[i][j] = (s[i-1]===t[j-1]?(dp[i-1][j-1]||0):0)+dp[i-1][j]
      }
    }
  }
  return dp[s.length][t.length]
};
// @lc code=end

// 'rab'  ''

// ''     'a'
