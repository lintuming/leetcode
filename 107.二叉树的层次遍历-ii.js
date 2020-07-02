/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (!root) return [];
  const queue = [root];
  const ans = [];
  while (queue.length) {
    let l = queue.length;
    const buffer = [];
    while (l) {
      const node = queue.shift();
      if (node) {
        buffer.push(node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
      l--
    }
    ans.unshift(buffer)
  }
  return ans
};
// @lc code=end
