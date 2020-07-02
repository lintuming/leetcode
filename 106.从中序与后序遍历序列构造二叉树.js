/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
// 跟105相似，只是根节点在postorder最后
var buildTree = function (inorder, postorder) {
  if (inorder.length === 0) return null;
  const rootVal = postorder[postorder.length - 1];
  const root = new TreeNode(rootVal);
  if (inorder.length === 1) {
    return root;
  } else {
    const rootIndex = inorder.indexOf(rootVal);
    const leftTree = buildTree(
      inorder.slice(0, rootIndex),
      postorder.slice(0, rootIndex)
    );
    const rightTree = buildTree(
      inorder.slice(rootIndex + 1),
      postorder.slice(rootIndex, postorder.length - 1)
    );
    root.left = leftTree;
    root.right = rightTree;
    return root
  }
};
// @lc code=end
