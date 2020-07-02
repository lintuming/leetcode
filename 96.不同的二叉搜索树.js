/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = s1




function s1(n) {
  function nums(left, right) {
    if (left > right) return 1;
    if (left === right) {
      return 1;
    }
    let total = 0;
    for (let n = left; n <= right; n++) {
      total += nums(left, n - 1) * nums(n + 1, right);
    }
    return total;
  }
  return nums(1,n)
};
// @lc code=end
console.log(numTrees(3))