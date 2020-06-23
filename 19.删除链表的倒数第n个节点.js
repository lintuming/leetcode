/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {number} n
 * @return {ListNode}
 */
/**
 * 快慢指针
 * 让快指针先走n,
 */
var removeNthFromEnd = function (head, n) {
  const dummy = new ListNode(-1);
  dummy.next = head;
  let fast = dummy;
  let slow = dummy;
  while (n) {
    fast = fast.next;
    n--
  }

  while(fast.next){
    fast = fast.next;
    slow = slow.next
  }
  slow.next = slow.next.next
  return dummy.next
};
// @lc code=end
