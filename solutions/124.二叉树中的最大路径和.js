/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
 * @return {number}
 */
var maxPathSum = function (root) {
  let max = -Number.MAX_SAFE_INTEGER;

  function traverse(node) {
    if (!node) return -Number.MAX_SAFE_INTEGER;
    const leftMax = traverse(node.left),
      rightMax = traverse(node.right);
    max = Math.max(
      max,
      node.val,
      leftMax,
      leftMax + node.val,
      rightMax,
      rightMax + node.val,
      node.val + leftMax + rightMax
    );
    // 返回经过进入node时的最大路径和
    return Math.max(leftMax + node.val, rightMax + node.val, node.val);
  }
  traverse(root);
  return max;
};
// @lc code=end
