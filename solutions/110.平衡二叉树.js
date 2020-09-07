/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function s2(root) {
  if (!root) return true;
  function depth(node) {
    if (!node) {
      return 0;
    }
    return Math.max(depth(node.left), depth(node.right)) + 1;
  }

  return (
    Math.abs(depth(root.left)-depth(root.right)) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  );
};

function s1(root) {
  if (!root) return true;
  function depth(node) {
    if (!node) return 0;
    return Math.max(depth(node.left), depth(node.right)) + 1;
  }
  const left = depth(root.left);
  const right = depth(root.right);
  return (
    Math.abs(left - right) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  );
}
// @lc code=end

//            1
//         2     2
//     3              3
//  4                   4
