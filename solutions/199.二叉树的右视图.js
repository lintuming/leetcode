/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
var rightSideView = function (root) {
  const ans = [];
  if (!root) {
    return ans;
  }
  const stack = [];
  while (root || stack.length) {
    if (root) {
      stack.push(root);
      if (stack.length > ans.length) {
        ans.push(root.val);
      }
      root = root.right;
    } else {
      const last = stack[stack.length - 1];
      if (last.isVisited) {
        delete last.isVisited
        stack.pop();
      } else {
        last.isVisited = true
        if (last.left) {
          root = last.left;
        }
      }
    }
  }
  return ans
};
// @lc code=end
console.log(rightSideView())