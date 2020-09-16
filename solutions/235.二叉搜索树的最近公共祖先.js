/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
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
var lowestCommonAncestor = function loop(root,p,q){
  while (root) {
    if (root.val < p && root.val < q) {
      root = root.right
    } else if (root.val > p && root.val > q) {
      root = root.left;
    }
    return root
  }
}




function recurse(root, p, q) {
  if (root.val < p && root.val < q) {
    return lowestCommonAncestor(root.right,p,q)
  }
  if (root.val > p && root.val > q) {
    return lowestCommonAncestor(root.left,p,q)
  }
  return root
};
// @lc code=end
