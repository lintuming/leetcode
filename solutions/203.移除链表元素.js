/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  const dummy = new ListNode();
  dummy.next = head;
  let node = dummy;
  while (node) {
    if (node.next && node.next.val === val) {
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }
  return dummy.next;
};
// @lc code=end
