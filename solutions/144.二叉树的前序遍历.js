/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
var preorderTraversal = iterator;

function iterator(root) {
  const ans = [];
  if (!root) return ans;
  const stack = [];
  while (root || stack.length) {
    if (root) {
      ans.push(root.val);
      stack.push(root);
      root = root.left;
    } else {
      const r = stack.pop();
      if (r.right) {
        root = r.right;
      }
    }
  }
  return ans
}
function recurse(root) {
  if (!root) return [];
  const ans = [];
  function traverse(node) {
    if (!node) return;
    ans.push(node.val);
    traverse(node.left);
    traverse(node.right);
  }

  return traverse(root), ans;
}
// @lc code=end
