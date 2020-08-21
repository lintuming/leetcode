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
  if (nums.length === 0) return 0;
  const dp1 = [0, nums[0]];
  const dp2 = [0, 0];
  for (let i = 1; i < nums.length; i++) {
    const index = i + 1;
    const count = nums[i];
    const isLast = i === nums.length - 1;
    dp1[index] = isLast
      ? Math.max(dp2[index - 2] + count, dp1[index - 1])
      : Math.max(dp1[index - 2] + count, dp1[index - 1]);
    dp2[index] = Math.max(dp2[index - 2] + count, dp2[index - 1]);
  }
  return Math.max(dp1[nums.length], dp2[nums.length]);
};
// @lc code=end

console.log(rob([1, 2, 3, 1]));
