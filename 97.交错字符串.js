/*
 * @lc app=leetcode.cn id=97 lang=javascript
 *
 * [97] 交错字符串
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) return false;
  // dp[i][j] 表示 s1[i]之前的字母能否和s2 [j]之前的字母交错 组成s3[i+j]之前的字母;
  const dp = Array.from({ length: s1.length + 1 }, () => []);
  for (let i = 0; i <= s1.length; i++) {
    for (let j = 0; j <= s2.length; j++) {
      if (i === 0) {
        dp[i][j] = s2.slice(0, j) === s3.slice(0, j);
      } else if (j === 0) {
        dp[i][j] = s1.slice(0, i) === s3.slice(0, i);
      } else {
        // 'aab'  'dbb'  'aadbb'
        //  'aa'   'dbb'  'aadbb'
        //   012    0123   012
        dp[i][j] =
          (dp[i][j - 1] ? s2[j - 1] === s3[i + j - 1] : false) ||
          (dp[i - 1][j] ? s1[i - 1] === s3[i + j - 1] : false);
      }
    }
  }
  return dp[s1.length][s2.length]
};
// @lc code=end
console.log(isInterleave('aabcc','dbbca','aadbbcbcac'));
console.log(isInterleave('aabcc','dbbca','aadbbbaccc'));
