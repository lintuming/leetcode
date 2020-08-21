/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
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
var rob = s2;

function s2(root) {
  function dfs(node) {
    if (!node) return [0, 0];
    const l = dfs(node.left);
    const r = dfs(node.right);
    const robbed = node.val + l[1] + r[1];
    const notRobbed = Math.max(
      l[0] + r[0],
      l[0] + r[1],
      l[1] + r[0],
      l[1] + r[1]
    );
    return [robbed, notRobbed];
  }
  const r = dfs(root);
  return Math.max(r[0], r[1]);
}

function s1(root) {
  if (!root) return 0;
  function dfs(root, canRob) {
    if (!root) {
      return 0;
    }
    if (canRob) {
      return Math.max(
        dfs(root.left, true) + dfs(root.right, true),
        dfs(root.left, false) + dfs(root.right, false) + root.val
      );
    }
    return dfs(root.left, true) + dfs(root.right, true);
  }
  return Math.max(dfs(root, true), dfs(root, false));
}
// @lc code=end
