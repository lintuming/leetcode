/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  const pathsOfSums = [];
  const buffer = [];
  const t = sum;
  function traverse(node, sum) {
    if (!node) return;
    buffer.push(node.val);
    sum = sum + node.val;
    if (sum === t && !node.left && !node.right) {
      pathsOfSums.push(buffer.slice());
      return buffer.pop();
    }
    if (!node.left) {
      traverse(node.right, sum);
      buffer.pop();
      return;
    }
    if (!node.right) {
      traverse(node.left, sum);
      return buffer.pop();
    }
    traverse(node.left, sum);
    traverse(node.right, sum);
    buffer.pop();
  }
  traverse(root,0);
  return  pathsOfSums
};
// @lc code=end
