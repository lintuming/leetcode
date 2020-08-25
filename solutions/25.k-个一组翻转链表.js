/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  function reverse(head) {
    let prev = head;
    let node = head.next;
    head.next = null;
    while (node) {
      const next = node.next;
      node.next = null;
      node.next = prev;
      prev = node;
      node = next;
    }
    return prev;
  }
  let i = 0;
  let startNode;
  let node = head;
  let newHead = head;
  while (node) {
    i++;
    const next = node.next;
    if (i === 1) {
      startNode = node;
    }
    if (i === k) {
      i=0
      node.next = null;
      const nH = reverse(startNode);
      if (!newHead) {
        newHead = nH;
      }
      startNode.next = next;
    }
    node = next;
  }
  return newHead;
};
// @lc code=end
