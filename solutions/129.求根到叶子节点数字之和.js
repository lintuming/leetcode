/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根到叶子节点数字之和
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
/**
 *
 *         1
 *      0
 *   0
 * 3
 */
var sumNumbers = function (root) {
  if (!root) return 0;
  function traverse(node, prev) {
    const nextSum = prev * 10 + node.val;
    if (!node.left && !node.right) {
      return nextSum;
    }
    if (!node.left) return traverse(node.right, nextSum);
    if (!node.right) return traverse(node.left, nextSum);
    return traverse(node.left, nextSum) + traverse(node.right, nextSum);
  }
  return traverse(root, 0);
};
// @lc code=end
