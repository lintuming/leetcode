/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
var isValidBST = function (root) {
  function isValidBSTImpl(root, min, max) {
    if (!root) return true;
    if (root.val <= min || root.val >= max) {
      return false;
    }
    return (
      isValidBSTImpl(root.left, min, root.val) &&
      isValidBSTImpl(root.right, root.val, max)
    );
  }
  return isValidBSTImpl(
    root,
    -Number.MAX_SAFE_INTEGER,
    Number.MAX_SAFE_INTEGER
  );
};
// @lc code=end
