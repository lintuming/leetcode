/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function s2(root) {
  const ans = [];
  if (!root) return ans;
  const queue = [root];
  let reverse = false;
  while (queue.length) {
    let l = queue.length;
    const buffer = [];
    while (l) {
      const node = queue.shift();
      if (node) {
        if (reverse) {
          buffer.unshift(node.val);
        } else {
          buffer.push(node.val);
        }
        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
      }
      l--
    }
    ans.push(buffer)
    reverse = !reverse
  }
  return ans
};

function s1(root) {
  const ans = [];
  if (!root) return ans;
  const queue = [root];
  let reverse = false;
  while (queue.length) {
    let l = queue.length;
    const buffer = [];
    const dequeueMethod = reverse ? "pop" : "shift";
    const enqueueMethod = reverse ? "unshift" : "push";
    while (l) {
      const node = queue[dequeueMethod]();
      if (node) {
        buffer.push(node.val);
        if (reverse) {
          if (node.right) queue[enqueueMethod](node.right);
          if (node.left) queue[enqueueMethod](node.left);
        } else {
          if (node.left) queue[enqueueMethod](node.left);
          if (node.right) queue[enqueueMethod](node.right);
        }
      }
      l--;
    }
    ans.push(buffer);
    reverse = !reverse;
  }
  return ans;
}
// @lc code=end
