/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = s2;

function s3(nums, k) {
  while (k) {
    nums.unshift(nums[nums.length - 1]);
    nums.length--;
    k--;
  }
  return nums;
}

function s2(nums, k) {
  if (k > nums.length) {
    k = k % nums.length;
  }
  const l = nums.length;
  for (let i = 0; i < l - k; i++) {
    nums[l + i] = nums[i];
  }
  for (let i = 0; i < l; i++) {
    nums[i] = nums[i + l - k];
  }
  nums.length = l;
  return nums;
}
function s1(nums, k) {
  while (k) {
    nums.unshift(nums.pop());
    k--;
  }
  return nums;
}
// @lc code=end
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotate([-1], 3));

