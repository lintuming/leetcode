/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  if (nums.length <= 1) return nums[0];
  const dp = [nums[0], nums[0]];
  let prevMin = nums[0];
  let prevMax = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const curMin = Math.min(nums[i], prevMin * nums[i], prevMax * nums[i]);
    const curMax = Math.max(nums[i], prevMin * nums[i], prevMax * nums[i]);
    prevMin = curMin;
    prevMax = curMax
    max = Math.max(prevMax, max);
  }
  return max
};
// @lc code=end
console.log(maxProduct([2, 3, -2, 4]));
console.log(maxProduct([-2,0,-1]));

