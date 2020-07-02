/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  if (!root) return false;
  const rest = sum - root.val;
  if (rest === 0 && !root.left && !root.right) return true;

  if (!root.left) return hasPathSum(root.right, rest);
  if (!root.right) return hasPathSum(root.left, rest);
  return hasPathSum(root.left, rest) || hasPathSum(root.right, rest);
};
// @lc code=end
//                 1
//          -2          -3
//      1       3   -2
//  -1
