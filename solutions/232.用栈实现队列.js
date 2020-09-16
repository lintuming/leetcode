/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.stack = [];
  this.headStack = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.headStack.length === 0) {
    while (this.stack.length) {
      this.headStack.push(this.stack.pop());
    }
  }
  return this.headStack.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.headStack.length === 0) {
    while (this.stack.length) {
      this.headStack.push(this.stack.pop());
    }
  }
  return this.headStack[this.headStack.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.headStack.length === 0 && this.stack.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

const queue = new MyQueue();
const methods = [
  "push",
  1,
  "push",
  2,
  "peek",
  null,
  "pop",
  null,
  "empty",
  null,
  'peek',null
];

for (let i = 0; i < methods.length; i += 2) {
  const method = methods[i];
  const params = methods[i + 1];
  console.log(queue[method](params));
}
