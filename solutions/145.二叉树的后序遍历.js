/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = iteration;

function iteration(root) {
  const ans = [];
  if (!root) return ans;
  const stack = [];
  const stackRight = [];
  while (root || stack.length || stackRight.length) {
    if (root) {
      stack.push(root);
      if (root.right) {
        stackRight.push(root.right);
      }
      root = root.left;
    } else {
      const l = stack[stack.length - 1];
      const r = stackRight[stackRight.length - 1];
      if (l.right !== r) {
        ans.push(l.val);
        stack.pop();
      } else {
        root = stackRight.pop();
      }
    }
  }
  return ans;
}
function recurse(root) {
  const ans = [];
  if (!root) return ans;
  function traverse(root) {
    if (!root) return;
    traverse(root.left);
    traverse(root.right);
    ans.push(root.val);
  }
  return traverse(root), ans;
}
// @lc code=end
