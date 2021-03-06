/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function s2(prices,max=2) {
  const dp = Array.from({ length: prices.length }, () =>
    Array.from({ length: max + 1 }, () => [])
  );

  for (let i = 0; i < prices.length; i++) {
    for (let k = max; k >= 0; k--) {
      if (i === 0) {
        dp[0][k][0] = 0;
        dp[0][k][1] = -prices[0];
        continue;
      }
      if (k === 0) {
        dp[i][0][0] = 0;
        dp[i][0][1] = -Infinity;
        continue;
      }
      dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i]);
      dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i]);
    }
  }
  return dp[prices.length - 1][max][0];
};

function s1(prices) {
  // dp[i] 表示 i 后面的一次交易的最大利润
  const dp = [];
  const last = prices.length - 1;
  dp[last] = 0;
  let max = 0;
  let prevMax = prices[last];
  for (let i = last - 1; i >= 0; i--) {
    // dp[i] = 后面的最大的价格减去当前的价格 和 后面一天卖出的最大利润的最大值
    dp[i] = Math.max(prevMax - prices[i], dp[i + 1]);
    prevMax = Math.max(prevMax, prices[i]);

    for (let j = i + 1; j < prices.length; j++) {
      const p = prices[j];
      // 往后面找，i为当天买入，j 为卖出
      max = Math.max(max, p - prices[i] + dp[j]);
    }
  }
  return max;
}
// @lc code=end
console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4],3));
console.log(maxProfit([1, 2, 3, 4, 5]));
