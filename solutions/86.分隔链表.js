/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  if (!head) return null;
  const dummy = new ListNode();
  dummy.next = head;
  // smaller 永远指向链表中小于x的最后一个节点
  // smaller.next 永远是分隔点( val >= x)
  let smaller = dummy;
  let bigger = head;
  while (bigger && bigger.val < x) {
    bigger = bigger.next;
    smaller = smaller.next;
  }
  while (bigger) {
    const next = bigger.next;
    if (next && next.val < x) {
      nextNext = next.next;
      next.next = smaller.next;
      smaller.next = next;
      smaller = smaller.next;
      bigger.next = nextNext;
    } else {
      bigger = bigger.next;
    }
  }
  return dummy.next;
};
// @lc code=end
