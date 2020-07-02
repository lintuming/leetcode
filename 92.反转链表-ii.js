/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  if (!head) return null;
  if (m === n) return head;
  const dummy = new ListNode();
  dummy.next = head;
  let node = head;
  let prev = dummy;
  let start = null;
  let tail = null;
  let i = 1;
  while (i <= n) {
    const next = node.next;
    if (i === m) {
      start = prev;
      tail = node;
    } else if (i > m) {
      tail.next = next;
      // head = start.next
      node.next = start.next;
      start.next = node;
    }
    prev = node;
    node = next;
    i++;
  }
  return dummy.next;
};
// @lc code=end
