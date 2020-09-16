/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
var countNodes = function(root) {
  const stack = [];
  let node = root;
  let count = 0;
  while (node || stack.length) {
    if (node) {
      if (node.right) {
        stack.push(node.right);
      }
      stack.push(node);
      node = node.left;
    } else {
      const popedNode = stack.pop();
      if (popedNode.right === stack[stack.length - 1]) {
        node = stack.pop();
        stack.push(popedNode);
      } else {
        count ++;
      }
    }
  }
  return count
};
// @lc code=end
