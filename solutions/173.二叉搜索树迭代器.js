/*
 * @lc app=leetcode.cn id=173 lang=javascript
 *
 * [173] 二叉搜索树迭代器
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
 */
var BSTIterator = function (root) {
  this.stack = [];
  this.node = root;
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  while (this.node || this.stack.length) {
    if (this.node) {
      this.stack.push(this.node);
      this.node = this.node.left;
    } else {
      const n = this.stack.pop();
      this.node = n.right;
      return n.val
    }
  }
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.stack.length > 0 || this.node!==null;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
// @lc code=end
