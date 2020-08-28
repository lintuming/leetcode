/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 由于需要最小的正整数,范围只能是 [1,nums.length+1]
var firstMissingPositive = function s2(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= 0) {
      nums[i] = nums.length + 1;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    const n = Math.abs(nums[i]);
    if (n <= nums.length)
      nums[n - 1] = nums[n - 1] < 0 ? nums[n - 1] : -1 * nums[n - 1];
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      return i + 1;
    }
  }
  return nums.length + 1;
};

console.log(firstMissingPositive([1, 2, 0]));

function s1(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= 0) {
      nums[i] = nums.length + 1;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    const abs = Math.abs(nums[i]);
    if (abs <= nums.length) {
      nums[abs - 1] = -1 * Math.abs(nums[abs - 1]);
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      return i + 1;
    }
  }
  return nums.length + 1;
}
// @lc code=end
console.log(firstMissingPositive([1, 1]));
