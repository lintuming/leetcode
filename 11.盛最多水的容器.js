/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0,
    right = height.length - 1,
    max = 0;
  while (left < right) {
    const hL = height[left];
    const hR = height[right];
    const l = left,r = right
    let min;
    if (hL === hR) {
      left++;
      right--;
      min = hL;
    } else if (hL < hR) {
      left++;
      min = hL;
    } else {
      right--;
      min = hR;
    }
    max = Math.max(max, min * (r - l));
  }
  return max
};
// @lc code=end
