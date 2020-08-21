/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
var reverseList = iterate;


function iterate(head){
  let prev = null;
  let node = head;
  while(node){
    const next = node.next;
    node.next = prev
    prev = node;
    node = next
  }
  return prev
}

function recurse(head) {

  function reverse(node,next){
    if(!node)return null;
    const currentNext = node.next;
    node.next = next;
    if(currentNext){
      return reverse(currentNext,node)
    }else{
      return node
    }
  }
  return reverse(head,null)
}
// @lc code=end
