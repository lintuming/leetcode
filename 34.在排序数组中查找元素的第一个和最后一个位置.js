/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const mid = ((left + right) / 2) | 0;
    if (nums[mid] === target) {
      if (nums[left] === target && nums[right] === target) {
        return [left, right];
      }
      //缩小范围
      if (nums[right] !== target) {
        right--;
      }
      //缩小范围
      if (nums[left] !== target) {
        left++;
      }
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    }
  }
  return [-1, -1];
};
// @lc code=end
console.log(searchRange([5, 7, 7, 8, 8, 10], 7));
