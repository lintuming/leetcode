/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
var levelOrder = function (root) {
  const ans = [];
  if (!root) return ans;
  const queue = [root];
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
      l--;
    }
    ans.push(buffer);
  }
  return ans;
};
// @lc code=end
