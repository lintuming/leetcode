/*
 * @lc app=leetcode.cn id=132 lang=javascript
 *
 * [132] 分割回文串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {
  if (s.length <= 0) return 0;
  // dp[i]表示 i 之前的字符窜形成回文最少的分割次数
  // dp[0]  s.slice(0,0) === '' 不需要分割
  const dp = [0, 0];
  function isPalindrome(w) {
    if (w.length === 1) return true;
    let left = 0,
      right = w.length - 1;
    while (left <= right) {
      if (w[left] !== w[right]) return false;
      left++;
      right--;
    }
    return true;
  }
  for (let i = 2; i <= s.length; i++) {

    dp[i] = dp[i - 1] + 1;
    for (let j = i - 2; j >= 0; j--) {
      if (isPalindrome(s.slice(j, i))) {
        dp[i] = Math.min(dp[i], dp[j] + (j === 0 ? 0 : 1));
      }
    }
  }
  return dp[s.length];
};
// @lc code=end
console.log(minCut("aabaa"));
console.log(minCut("cabababcbc"));
console.log(minCut("aab"));
console.log(minCut("leet"));
