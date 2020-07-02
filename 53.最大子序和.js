/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // 前面的最大的连续子数组和
  let prev = -Number.MAX_SAFE_INTEGER;

  let max = -Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    //当前最大连续子数组和取 前面最大的连续子数组和加上当前整数和当前整数的最大值
    prev = Math.max(nums[i] + prev, nums[i]);
    max = Math.max(prev, max);
  }
  return max
};
// @lc code=end
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))