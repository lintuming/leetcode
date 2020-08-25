/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @return {ListNode}
 */
var swapPairs = function (head) {
  const dummy = new ListNode();
  dummy.next = head;
  let node = head;
  let prev = dummy;

  while (node) {
    if (node.next) {
      const nextNext = node.next.next;
      const next = node.next;
      next.next = null;
      node.next = null;
      next.next = node;
      prev.next = next;
      prev = node;
      node = nextNext;
    } else {
      prev.next = node;
      node = node.next;
    }
  }
  return dummy.next;
};
// @lc code=end
