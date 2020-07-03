/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU缓存机制
 */

// @lc code=start
/**
 * @param {number} capacity
 */

function ListNode(val) {
  this.val = val;
  this.prev = null;
  this.next = null;
}

var LRUCache = function (capacity) {
  this.cache = new Map();
  this.head = null;
  this.tail = null;
  this.capacity = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    const node = this.cache.get(key);
    const prev = node.prev;
    const next = node.next;
    node.next = null;
    node.prev = null;
    if (this.tail === node) {
      this.tail = prev;
    }
    if (prev) {
      prev.next = next;
    }
    if (next) {
      next.prev = prev;
    }
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    return node.val;
  } else {
    return -1;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    return (this.cache.get(key).val = value);
  }
  const node = new ListNode(value);
  node.next = this.head;
  if (this.head) {
    this.head.prev = node;
  } else {
    this.head = node;
    this.tail = node;
  }
  this.cache.set(key, node);
  if (this.cache.size >= this.capacity) {
    this.cache.delete(this.tail.val);
    this.tail = this.tail.prev;
    this.tail.next = null;
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
