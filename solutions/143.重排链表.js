/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = s2;

function s2(head) {
  if (!head) return null;
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let left = head;
  let right = reverse(slow.next);
  slow.next = null;
  // 12 4 3
  while (right) {
    const lnext = left.next;
    const rnext = right.next;
    left.next = right;
    right.next = lnext;
    left = lnext;
    right = rnext;
  }
  return head;

  function reverse(node, n) {
    // let prev = null;
    // while (node) {
    //   const next = node.next;
    //   node.next = prev;
    //   prev = node;
    //   node = next;
    // }
    // return prev
    if (!node) return null;
    const next = node.next;
    node.next = null;
    node.next = n;
    if (next) {
      return reverse(next, node);
    } else {
      return node;
    }
  }
}

function s1(head) {
  function reorder(node) {
    if (!node || !node.next) {
      return node;
    }
    let point = node;
    let prev = null;
    while (point.next !== null) {
      prev = point;
      point = point.next;
    }
    const next = node.next;
    if (next === point) {
      return node;
    }
    node.next = point;
    prev.next = null;
    point.next = reorder(next);
    return node;
  }
  return reorder(head);
}
// @lc code=end
