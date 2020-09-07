/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
// 单调栈
var largestRectangleArea = function s2(heights){
  const stack = [];
  heights.push(0);
  heights.unshift(0);
  let ans = 0
  for (let i = 0; i < heights.length; i++) {
    while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
      const top = stack[stack.length - 1];
      stack.pop();
      const left = stack[stack.length - 1] + 1
      const right = i
      ans = Math.max(ans, (right - left) * heights[top])
    }
    stack.push(i)
  }
  return ans
}








function s1(heights) {
  if (heights.length === 0) return 0;
  let max = 0;
  for (let i = 0; i < heights.length; i++) {
    let leftMax = i-1,
      rightMax = i+1;
    while (leftMax >= 0 && heights[leftMax] >= heights[i]) {
      leftMax--;
    }
    while (rightMax < heights.length && heights[rightMax] >= heights[i]) {
      rightMax++;
    }
    max = Math.max(max, (rightMax - leftMax-1) * heights[i]);
  }
  return max;
};
// @lc code=end
console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
