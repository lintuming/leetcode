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

var sortColors = function s2(nums) {
  let left = 0,
    right = nums.length - 1;
  let i = 0;
  //因为curr左边的值已经扫描过了，所以curr要++继续扫描下一位，而与p2交换的值，curr未扫描，要停下来扫描一下，所以curr不用++。
  while (i <= right) {
    const num = nums[i];
    if (num === 0) {
      swap(left, i);
      left++;
      i++;
    } else if (num === 2) {
      swap(right, i);
      right--;
    } else {
      i++;
    }
  }

  function swap(a, b) {
    [nums[a], nums[b]] = [nums[b], nums[a]];
  }
  return nums;
};
function s1(nums) {
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
}
// @lc code=end
console.log(sortColors([1, 2, 2, 1, 2, 0]));
