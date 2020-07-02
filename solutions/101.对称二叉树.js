/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = s2;

// iterator

function s2(root) {
  if (!root) return true;
  const queue = [root.left, root.right];
  while (queue.length) {
    const A = queue.shift();
    const B = queue.shift();
    if ((A && B) || (!A && !B)) {
      if (A && B) {
        if (A.val === B.val) {
          queue.push(A.left, B.right, A.right, B.left);
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  }
  return true;
}

// recurse
function s1(root) {
  if (!root) return true;
  function isMirror(A, B) {
    if (!A && !B) return true;
    if (!A || !B) return false;
    if (A.val !== B.val) return false;
    return (
      A.val === B.val && isMirror(A.left, B.right) && isMirror(A.right, B.left)
    );
  }
  return isMirror(root.left, root.right);
}
// @lc code=end
