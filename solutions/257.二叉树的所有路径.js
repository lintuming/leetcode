/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
 const ans = [];

 function traverse (node,paths) {
   if (!node) {
     return;
   }
   paths = paths?paths+"->"+node.val:""+node.val;
   if (!node.left && !node.right) {
     return ans.push(paths);
   } 
   traverse(node.left,paths);
   traverse(node.right,paths)
 }
 traverse(root,'');
 return ans
};
// @lc code=end

