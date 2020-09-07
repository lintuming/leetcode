/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  const stack = [];
  const ans = Array(T.length).fill(0);

  for (let i = 0; i < T.length; i++) {
    while (stack.length && T[stack[stack.length - 1]] < T[i]) {
      const top = stack[stack.length - 1];
      stack.pop();
      ans[top] = i - top
    }
    stack.push(i)
  }

  return ans
};
// @lc code=end
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))
