/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      let j = nums.length - 1;
      while (nums[j] <= nums[i]) {
        j--;
      }
      [nums[i], nums[j]] = [nums[j], nums[i]];
      reverse(nums, i + 1, nums.length-1);
      return;
    }
  }
  reverse(nums, 0, nums.length-1);
  function reverse(arr, from, end) {
    const mid = ((from + end) / 2) | 0;
    let left = from;
    let right = end ;
    while (left <= mid) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
};
// @lc code=end

console.log(nextPermutation([1, 3, 2]));
