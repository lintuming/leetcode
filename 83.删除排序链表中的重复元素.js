/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
var deleteDuplicates = function (head) {
  let node = head;
  while (node) {
    const n = node;
    while (node.next && node.val === node.next.val) {
      node = node.next;
    }
    n.next = node.next;
    node = node.next;
  }
  return head;
};
// @lc code=end
