/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  const stack = [];
  // use post order;
  while (root || stack.length) {
    if (root) {
      if (root.right) {
        stack.push(root.right);
      }
      stack.push(root);
      root = root.left;
    } else {
      let top = stack.pop();
      if (stack[stack.length - 1] === top.right) {
        const right = stack.pop(); // right
        stack.push(top);
        root = right;
      } else {
        if (top === p || top.p) {
          top.p = true;
          if (stack.length) stack[stack.length - 1].p = true;
        }
        if (top === q || top.q) {
          top.q = true;
          if(stack.length)
          stack[stack.length - 1].q = true;
        }
        if (top.p && top.q) {
          return top;
        }
      }
    }
  }
};
// @lc code=end
