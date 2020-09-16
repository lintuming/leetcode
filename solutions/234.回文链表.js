/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (!head) {return null;}
  let slow = head;
  let fast = head
  while (fast && fast.next && fast.next.next) {
    fast = fast.next.next
    slow = slow.next;
  }
  let n2 = reverse(slow.next);
  let n1 = head;
  while (n2 !== null) {
    if (n1.val !== n2.val) {
      return false;
    }
    n1 = n1.next;
    n2 = n2.next;
  }
  slow.next = reverse(n2);
  return true
  function reverse(node){
    let prev = null;
    while (node) {
      const next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return prev
  }
};
// @lc code=end

