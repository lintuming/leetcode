/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 缺失数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]);
    if (index < nums.length) {
      if (nums[index] === 0) {
        nums[index] = -nums.length;
        nums[0] = nums[0] < 0 ? nums[0] : -nums[0];
      } else nums[index] = -1 * nums[index];
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
      return i;
    }
  }
  return nums.length;
};
// @lc code=end
console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
console.log(missingNumber([1, 2, 3]));
console.log(missingNumber([2, 0]));
