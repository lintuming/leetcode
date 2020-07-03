/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  if(!s)return false;

  const hashMap = new Map();
  for (const word of wordDict) {
    hashMap.set(word, true);
  }
  // dp[i]表示 i之前能不能拆分
  const dp = [true];
  for (let i = 1; i <= s.length; i++) {
    dp[i] = false;
    inner: for (let j = 0; j < i; j++) {
      if (dp[j] === true && hashMap.has(s.slice(j, i))) {
        dp[i] = true;
        break inner;
      }
    }
  }
  return dp[s.length];
};
// @lc code=end
console.log(wordBreak("leetcode", ["leet", "code"]));
console.log(wordBreak("applepenapple", ["apple", "pen"]));
console.log(wordBreak("", ["apple", "pen"]));
console.log(wordBreak("apple", []));




