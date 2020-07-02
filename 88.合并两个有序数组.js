/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let placed = m + n - 1;
  let i = m - 1;
  let j = n - 1;
  while (i >= 0 && j >= 0) {
    if (nums2[j] > nums1[i]) {
      nums1[placed] = nums2[j--];
      placed--;
    } else {
      nums1[placed] = nums1[i--];
      placed--;
    }
  }
  while (j>=0) {
    nums1[placed] = nums2[j--];
    placed--;
  }
  while (i>=0) {
    nums1[placed] = nums1[i--];
    placed--;
  }
  return nums1;
};
// @lc code=end
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
