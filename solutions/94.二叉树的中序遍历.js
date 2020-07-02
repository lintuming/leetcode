/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = s2;

// iterator
function s2(root) {
  const inorder = [];
  const stack = [];

  while (root || stack.length) {
    if (!root) {
      const n = stack.pop();
      if (n) {
        inorder.push(n.val);
        root = n.right;
      }
    } else{
      stack.push(root);
      root = root.left;
    }
  }
  return inorder
}

// recurse
function s1(root) {
  const inorder = [];

  function traverseInorder(node) {
    if (!node) return;
    traverseInorder(node.left);
    inorder.push(node.val);
    traverseInorder(node.right);
  }
  traverseInorder(root);
  return inorder;
}
// @lc code=end
