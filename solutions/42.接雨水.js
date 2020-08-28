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

var trap = function s3(heights) {
  const stack = [];
  let ans = 0;
  for (let i = 0; i < heights.length; i++) {
    let stackTop = stack[stack.length - 1];
    inner: while (
      stackTop != null &&
      heights[i] > heights[(stackTop = stack[stack.length - 1])]
    ) {
      stack.pop();
      const leftBound = stack[stack.length - 1];
      if (leftBound != null) {
        ans +=
          (i - leftBound - 1) *
          (Math.min(heights[leftBound], heights[i]) - heights[stackTop]);
      } else {
        break inner;
      }
    }
    stack.push(i);
  }
  return ans;
};
console.log(trap([2, 1, 0, 2]));

// function s2(heights) {
//   let ans = 0;
//   let leftMax = -Number.MAX_SAFE_INTEGER;
//   for (let i = 0; i < heights.length; i++) {
//     let rightMax = heights[i];
//     leftMax = Math.max(heights[i], leftMax);
//     for (let j = i + 1; j < heights.length; j++) {
//       rightMax = Math.max(rightMax, heights[j]);
//     }
//     ans += Math.min(rightMax, leftMax) - heights[i];
//   }
//   return ans;
// }

// function s1(height) {
//   let ans = 0;

//   for (let i = 1; i < height.length; i++) {
//     let leftMax = 0,
//       rightMax = 0;
//     for (let j = i; j >= 0; j--) {
//       leftMax = Math.max(height[j], leftMax);
//     }
//     for (let j = i; j < height.length; j++) {
//       rightMax = Math.max(rightMax, height[j]);
//     }
//     ans += Math.min(leftMax, rightMax) - height[i];
//   }
//   return ans;
// }
// @lc code=end
// console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
