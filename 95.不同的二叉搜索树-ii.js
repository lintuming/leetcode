/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
 */

// @lc code=start

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  function gen(left, right) {
    if (left > right) {
      return [];
    }
    if (left === right) {
      return [new TreeNode(left)];
    }
    const result = [];
    for (let c = left; c <= right; c++) {
      const lefts = gen(left, c - 1);
      const rights = gen(c + 1, right);

      for (let i = 0; i < Math.max(1, lefts.length); i++) {
        for (let j = 0; j < Math.max(rights.length, 1); j++) {
          const node = new TreeNode(c);
          node.left = lefts[i] ? lefts[i] : null;
          node.right = rights[j] ? rights[j] : null;
          result.push(node);
        }
      }
    }
    return result;
  }
  return gen(1, n);
};
// @lc code=end
console.log(generateTrees(3));
