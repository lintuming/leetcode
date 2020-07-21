/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
const last = (stack) => stack[stack.length - 1];
var MinStack = function () {
  this.stack = [];
  this.minStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x);
  if (this.minStack.length) {
    if (last(this.minStack) >= x) {
      this.minStack.push(x);
    }
  } else {
    this.minStack.push(x);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const poped = this.stack.pop();
  if (last(this.minStack) === poped) {
    this.minStack.pop();
  }
  return poped;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return last(this.stack);
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return last(this.minStack);
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();
minStack.pop();
minStack.top();
minStack.getMin();
