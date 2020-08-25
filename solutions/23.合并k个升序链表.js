/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (!lists.length) return null;
  return divide(lists, 0, lists.length - 1);

  function divide(lists, left, right) {
    if (right === left) {
      return lists[left];
    } else  {
      const mid = ((left + right) / 2) | 0;
      const leftList = divide(lists, left, mid);
      const rightList = divide(lists, mid + 1, right);
      return merge(leftList, rightList);
    }
  }
  function merge(list1, list2) {
    const dummy = new ListNode();
    let node = dummy;
    while (list1 && list2) {
      if (list1.val < list2.val) {
        node.next = list1;
        list1 = list1.next;
      } else {
        node.next = list2;
        list2 = list2.next;
      }
      node = node.next;
    }
    while (list1) {
      node.next = list1;
      list1 = list1.next;
      node = node.next;
    }
    while (list2) {
      node.next = list2;
      list2 = list2.next;
      node = node.next;
    }
    return dummy.next;
  }
};
// @lc code=end
