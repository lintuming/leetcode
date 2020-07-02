/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
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
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  if (!head) return null;
  if (!head.next) {
    return new TreeNode(head.val);
  }
  let slow = head;
  let fast = head;
  let prev = null;
  while (fast && fast.next) {
    fast = fast.next.next;
    prev = slow;
    slow = slow.next;
  }
  if (prev) {
    prev.next = null;
  }
  const node = new TreeNode(slow.val);
  node.left = sortedListToBST(head);
  node.right = sortedListToBST(slow.next);
  return node
};
// @lc code=end

// [1,2~,3,4~,5,6]
// [-10, -3, ~0, 5, 9!],
