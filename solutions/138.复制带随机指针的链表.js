/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) return null;
  const m = new Map();
  function copy(node) {
    if (!node) return null;
    if (m.has(node)) {
      return m.get(node);
    }
    const n = new Node(node.val);
    m.set(node,n)
    n.next = copy(node.next);
    n.random = copy(node.random);
    return n
  }
  return copy(head)
};
// @lc code=end
