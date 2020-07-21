/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 0) return 0;
  const dp = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(
      (dp[i - 2] != null ? dp[i - 2] : 0) + nums[i],
      dp[i - 1]
    );
  }
  return dp[nums.length-1]
};
// @lc code=end
console.log(rob([2,7,9,3,1]))