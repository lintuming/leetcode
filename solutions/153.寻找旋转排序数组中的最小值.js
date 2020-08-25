/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
//
var findMin = function s2(nums) {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    const mid = ((left + right) / 2) | 0;
    if (nums[mid - 1] > nums[mid] && nums[mid + 1] >= nums[mid]) {
      return nums[mid];
    } else if (nums[left] <= nums[mid] && nums[right] >= nums[mid]) {
      return nums[left]
    } else if (nums[left] <= nums[mid]) {
      left = mid + 1;
    } else if (nums[right] >= nums[mid]) {
      right = mid - 1;
    }
  }
  return nums[left];
};

function s2(nums) {
  if (nums.length === 1) return nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      return nums[i];
    }
  }
  return nums[0];
}
// @lc code=end

console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
