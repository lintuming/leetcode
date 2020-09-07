/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
var deleteDuplicates = function s2(head){
  const dummy = new ListNode();
  dummy.next = head;
  let sentry = dummy;
  while (sentry) {
    let right = sentry.next;
    while (sentry.next &&right.next&& sentry.next.val === right.next.val) {
      right = right.next;
    }
    if (sentry.next === right) {
      sentry = sentry.next
    } else {
      sentry.next = right.next;
    }
  }
  return dummy.next
}



















function s1 (head) {
  const dummy = new ListNode();
  dummy.next = head;
  let slow = dummy;
  let fast = head;
  while (fast) {
    while (fast.next && slow.next.val === fast.next.val) {
      fast = fast.next;
    }
    if (slow.next !== fast) {
      slow.next = fast.next;
      fast = fast.next;
    } else {
      slow = slow.next;
      fast = fast.next;
    }
  }
  return dummy.next;
};
// @lc code=end
