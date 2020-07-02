/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
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

function logTree(root) {
  const queue = [root];
  const log = [];
  while (queue.length) {
    const root = queue.shift();
    if (root) {
      log.push(root.val);
      queue.push(root.left, root.right);
    } else {
      log.push(null);
    }
  }
  return log;
}

var recoverTree = function (root) {
  const min = new TreeNode(-Number.MAX_SAFE_INTEGER);
  const max = new TreeNode(Number.MAX_SAFE_INTEGER);
  const origin = root;
  function traverse(root, minNode, maxNode) {
    if (!root) return;

    // right part wrong
    if (root.val <= minNode.val) {
      //swap
      const v = root.val;
      root.val = minNode.val;
      minNode.val = v;
      traverse(origin, min, max);
    } else if (root.val >= maxNode.val) {
      const v = root.val;
      root.val = maxNode.val;
      maxNode.val = v;
      traverse(origin, min, max);
    } else {
      traverse(root.left, minNode, root);
      traverse(root.right, root, maxNode);
    }
  }
  traverse(root, min, max);
};
// @lc code=end
