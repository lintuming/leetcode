/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
// 升序 inorder
var sortedArrayToBST = function s2 () {
  
}











function s1(nums) {
  function buildTree(left, right) {
    if (left > right) {
      return null;
    }
    if (left === right) {
      const node = new TreeNode(nums[left]);
      return node;
    }
    const mid = Math.floor((left + right) / 2);
    const node = new TreeNode(nums[mid]);
    node.left = buildTree(left, mid - 1);
    node.right = buildTree(mid + 1, right);
    return node;
  }
  return buildTree(0, nums.length - 1);
};
// @lc code=end
