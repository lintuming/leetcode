/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let left = 0,
    i = 0,
    right = nums.length - 1;
  while (i <= right) {
    const n = nums[i];
    if (n === 0) {
      swap(left, i);
      left++;
      i++;
    } else if (n === 2) {
      swap(right, i);
      right--;
    } else {
      i++;
    }
  }

  return nums;
  function swap(i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
};
// @lc code=end
console.log(sortColors([1, 2, 2, 1, 2, 0]));
