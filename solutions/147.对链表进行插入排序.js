/*
 * @lc app=leetcode.cn id=147 lang=javascript
 *
 * [147] 对链表进行插入排序
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
var insertionSortList = function (head) {
  const dummy = new ListNode(-Number.MAX_SAFE_INTEGER);
  dummy.next = head;
  let prev = dummy;
  let cur = head;
  while (cur) {
    const next = cur.next;
    prev.next = next;
    cur.next = null;
    let node = dummy;
    while (node.next && node.next !== next && node.next.val < cur.val) {
      node = node.next;
    }
    const nodeNext = node.next;
    if (nodeNext === next) {
      prev = cur;
    }
    node.next = cur;
    cur.next = nodeNext;
    cur = next;
  }
  return dummy.next;
};
// @lc code=end
