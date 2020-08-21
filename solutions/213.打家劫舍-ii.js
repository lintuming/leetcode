/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if(nums.length<=0)return 0
  const dp = [[nums[0], 0]];
  let max = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (i - 2 >= 0) {
      if (i === nums.length - 1) {
        dp[i] = [dp[i - 2][0], nums[i] + dp[i - 2][1]];
      } else {
        dp[i] = [nums[i] + dp[i - 2][0], (nums[i] + dp[i - 2][1])];
      }
    } else {
      dp[i] = [0, nums[i]];
    }
    max = Math.max(...dp[i],max)
  }
  return max
};
// @lc code=end

console.log(rob([1,3,1,3,100]))
