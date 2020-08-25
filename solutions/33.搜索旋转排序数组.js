/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 规定时间复杂度O(log n)
// 二分法
var search = function s2(nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    //left = right
    const mid = ((left + right) / 2) | 0;
    if (nums[mid] === target) {
      return mid;
    } else if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else if (nums[right] >= nums[mid]) {
      if (nums[mid] > target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return nums[left] === target ? left : -1;
};

function s1(nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    // 终止条件 left = right;
    const mid = ((left + right) / 2) | 0;
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] >= nums[left]) {
      // mid > left , [left,mid] 递增
      if (nums[mid] > target && target >= nums[left]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else if (nums[mid] <= nums[right]) {
      // mid < right , [mid,right] 递增
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return nums[left] === target ? left : -1;
}
// @lc code=end
console.log(search([4, 5, 6, 7, 0, 1, 2], 5));
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
