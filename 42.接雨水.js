/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let ans = 0;

  for (let i = 1; i < height.length; i++) {
    let leftMax = 0,
      rightMax = 0;
    for (let j = i; j >= 0; j--) {
      leftMax = Math.max(height[j], leftMax);
    }
    for (let j = i; j < height.length; j++) {
      rightMax = Math.max(rightMax, height[j]);
    }
    ans += Math.min(leftMax, rightMax) - height[i];
  }
  return ans;
};
// @lc code=end
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
