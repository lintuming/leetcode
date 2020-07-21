/*
 * @lc app=leetcode.cn id=188 lang=javascript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  if (prices.length <= 1) return 0;
  if (k > prices.length / 2) {
    //无限次交易;
    let max = 0;
    let min = prices[0];
    for (let i = 1; i < prices.length; i++) {
      min = Math.min(prices[i], min);
      if (prices[i] > min) {
        max += prices[i] - min;
        min = prices[i];
      }
    }
    return max
  }
  // dp[i][j] j < k ,表示 第i天后面的交易了j次交易所得的最高利润
  const dp = Array.from({ length: prices.length }, () => Array(k + 1).fill(0));
  for (let i = prices.length - 2; i >= 0; i--) {
    // 从 i + 1 开始，如果再 第 j 天开始一次交易能获得的最大利润
    for (let j = i + 1; j < prices.length; j++) {
      // 一次交易
      const profit = prices[j] - prices[i];
      for (let kk = 1; kk <= k; kk++) {
        // kk = 1,表示 i 后面交易了1次,由于已经开始一次交易，需要看dp[j][kk - 1]的利润
        // kk = 2,表示 i 后面交易了2次
        if (dp[i][kk] == null) {
          dp[i][kk] = -Number.MAX_SAFE_INTEGER;
        }
        // dp[i][kk] =   
        // dp[j][kk](今天不交易), profit + dp[j][kk-1](在第j天交易一次),前面j天中 的最大值

        dp[i][kk] = Math.max(dp[j][kk], profit + dp[j][kk - 1], dp[i][kk]);
      }
    }
  }
  return dp[0][k];
};
// @lc code=end
console.log(maxProfit(2, [6,1,3,2,4,7]));
