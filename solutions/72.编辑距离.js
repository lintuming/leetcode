/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  // dp[i][j] 表示 word1 i之前的单词到word2 j 之前的单词的编辑距离（i,j不包括i,j,左开右闭关）,
  // 对于 dp[i][0]  恒有 dp[i][0] = i;
  // 例如 horse ros
  // i === 0 , '' -> ''  0
  // i === 1 , 'h' -> '' 1
  // i === 2,  'ho' -> '' 2
  // 对于 dp[0][j] 恒有 dp[0][j] = j;
  // 例如 horse ros
  // j === 0 , '' -> ''   0
  // j === 1 , '' -> 'r'  1
  // i === 2,  '' -> 'ro' 2
  const dp = Array.from({ length: word1.length + 1 }, (_, i) =>
    i === 0 ? Array.from({ length: word2.length + 1 }, (_, j) => j) : [i]
  );

  for (let i = 1; i <= word1.length; i++) {
    // 1 开始
    for (let j = 1; j <= word2.length; j++) {
      dp[i][j] = Math.min(
        dp[i][j - 1] + 1,
        // delete
        dp[i - 1][j] + 1,
        // replace
        dp[i - 1][j - 1] + 1,

        // i-1 === j -1 不变
        word1[i - 1] === word2[j - 1]
          ? dp[i - 1][j - 1]
          : Number.MAX_SAFE_INTEGER
      );
    }
  }
  return dp[word1.length][word2.length];
};
console.log(minDistance("horse", "ros"));
console.log(minDistance("intention", "execution"));
