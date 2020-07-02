/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */


var buildTree = function (preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) return null;
  const rootVal = preorder[0];
  const root = new TreeNode(rootVal);
  if (preorder.length === 1) {
    return root;
  } else {
    // 由于没有重复元素,所以rooVal在inorder的位置i 之前的元素就是，
    // root的左边的树的inorder顺序，i右边就是右边的树的inorder顺序,
    // preorder.slice(1,i+1)就是root的左边的树的preorder顺序
    const rootIndex = inorder.indexOf(rootVal);
    const leftTree = buildTree(
      preorder.slice(1, rootIndex + 1),
      inorder.slice(0, rootIndex)
    );
    const rightTree = buildTree(
      preorder.slice(rootIndex + 1),
      inorder.slice(rootIndex + 1)
    );
    root.left = leftTree;
    root.right = rightTree;
    return root;
  }
};
// @lc code=end

//                 2
//          4                5
//     8         7      8         1
// 15    7    8    0

//   2  4  8 15 7 7 8 0 5 8 1
//  15  8  7 4  8 7 0 2 8 5 1
