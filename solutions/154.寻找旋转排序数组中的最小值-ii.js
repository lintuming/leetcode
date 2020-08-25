/*
 * @lc app=leetcode.cn id=154 lang=javascript
 *
 * [154] 寻找旋转排序数组中的最小值 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function s1(nums) {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    let mid = ((left + right) / 2) | 0;
    
  }
  return nums[left];
};

function s2(nums) {
  if (nums.length <= 1) return nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      return nums[i];
    }
  }
  return nums[0];
}
// @lc code=end
console.log(findMin([2, 2, 2, 0, 1]));
console.log(findMin([1, 3, 5]));
console.log(findMin([3,1,1,1,1,]));

