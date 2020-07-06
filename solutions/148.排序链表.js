/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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

function log(head) {
  const buffer = [];
  while (head) {
    buffer.push(head.val);
    head = head.next;
  }
  return buffer;
}

var sortList = mergeSort;

function mergeSort(head) {
  if (!head) return null;
  if (!head.next) return head;
  const mid = getMid(head);
  const rightHead = mid.next;
  mid.next = null
  return merge(mergeSort(head), mergeSort(rightHead));
}
function getMid(head) {
  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}
const dummy = new ListNode();
function merge(nodeA, nodeB) {
  let prev = dummy;
  while (nodeA && nodeB) {
    if (nodeA.val < nodeB.val) {
      prev.next = nodeA;
      nodeA = nodeA.next;
    } else {
      prev.next = nodeB;
      nodeB = nodeB.next;
    }
    prev = prev.next
  }
  if(nodeA){
      prev.next = nodeA
  }
  if(nodeB){
      prev.next = nodeB
  }
  return dummy.next
}
// not passed
function quickSort(head) {
  if (!head) return null;

  return quickSort(head, null);
  function quickSort(left, next) {
    if (!left) return next;
    if (!left.next) {
      left.next = next;
      return left;
    }
    const pivot = left;
    let placed = left;
    let pointer = left;
    while (pointer && pointer.next) {
      if (pointer.next.val < pivot.val) {
        swap(placed, pointer);
        placed = placed.next;
      }
      pointer = pointer.next;
    }
    const rightHead = placed.next;
    placed.next = null;
    const leftHead = pivot.next;
    console.log(log(leftHead), "left");
    console.log(log(rightHead), "right");
    const head = quickSort(leftHead, left);
    left.next = quickSort(rightHead, next);
    return head;
    //3       // 4
    function swap(placed, pointer) {
      const curPlaced = placed.next;
      const cur = pointer.next;
      if (curPlaced === cur) return;
      const curNext = cur.next;
      if (curPlaced.next === cur) {
        cur.next = curPlaced;
        curPlaced.next = curNext;
        placed.next = cur;
      } else {
        cur.next = curPlaced.next;
        curPlaced.next = curNext;
        pointer.next = curPlaced;
        placed.next = cur;
      }
    }
  }
}
// @lc code=end
