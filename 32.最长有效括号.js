/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  const stack = [];
  let max = 0;
  let last = -1 // 
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else {
      const poped = stack.pop();
      if (poped != null) {
        const stackTop = stack[stack.length - 1]!=null?stack[stack.length-1]:last
        max = Math.max(max, i - stackTop);
      }else{
        last = i
      }
    }
  }
  return max
};
// @lc code=end
console.log(longestValidParentheses('(()'))
console.log(longestValidParentheses(')()())'))
