/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
// spread as postorder
var flatten = function (root) {
  let prev;
  function traverse(node) {
    if (!node) return;
    if (prev) {
      prev.right = node;
    }
    const right = node.right
    const left = node.left;
    prev = node;
    node.left = null;
    traverse(left);
    traverse(right)
  }
  traverse(root)
  return root
};
// @lc code=end
