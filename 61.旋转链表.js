/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
/**
 * 可以看成一个环状链表,向右移动K个位置,就是倒数第K个节点,
 * 可以用快慢指针,先让快指针走K步,到底再回到head
 */
var rotateRight = function (head, k) {
  if (!head) return null;

  let slow = head,
    fast = head;
  while (k) {
    fast = fast.next ? fast.next : head;
    k--;
  }
  while (fast.next) {
    fast = fast.next
    slow = slow.next
  }
  fast.next = head;
  head = slow.next;
  slow.next = null;
  return head;
};
// @lc code=end
