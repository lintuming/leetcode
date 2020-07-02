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
var maxProfit = function (prices) {
  // dp[i] 表示 i 后面的一次交易的最大利润
  const dp = [];
  const last = prices.length - 1;
  dp[last] = 0;
  let max = 0;
  let prevMax = prices[last];
  for (let i = last - 1; i >= 0; i--) {
    // dp[i] = 后面的最大的价格减去当前的价格 和 后面一天卖出的最大利润的最大值
    dp[i] = Math.max(prevMax - prices[i],dp[i+1]);
    prevMax = Math.max(prevMax, prices[i]);

    for (let j = i + 1; j < prices.length; j++) {
      const p = prices[j];
      // 往后面找，i为当天买入，j 为卖出
      max = Math.max(max, p - prices[i] + dp[j]);
    }
  }
  return max;
};
// @lc code=end
console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]));
console.log(maxProfit([1,2,3,4,5]))