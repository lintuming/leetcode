/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let left = 0,
    right = nums.length - 1;
  // 将nums 视为一个交替的升序降序序列
  while (left <= right) {
    const mid = ((left + right) / 2) | 0;
    if (nums[mid] < nums[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};
// @lc code=end
console.log(findPeakElement([1]));
