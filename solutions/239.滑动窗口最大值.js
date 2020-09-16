/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

class Queue {
  constructor(){
    this.q = [];
  }
  pop(n){
    if (this.q.length && this.top() === n) {
      this.q.shift();
    }
  }
  top(){
    return this.q[this.q.length - 1]
  }
  push(n){
    while (this.q.length && this.top() < n) {
      this.q.pop();
    }
    this.q.push(n)
  }
  max(){
    return this.top();
  }
}

var maxSlidingWindow = function(nums, k) {
  const output = [Number.MAX_SAFE_INTEGER];
  let prevIndex = -1;
  for (let i = 0; i <= nums.length.length - k; i++) {
    const newArrive = nums[i + k - 1];
    if (newArrive >= output[output.length - 1]) {
      output.push(newArrive);
      prevIndex = i + k - 1
    } else {
      if (prevIndex>=i && prevIndex <= i + k - 1) {
        output.push(nums[prevIndex])
      } else {
        output.push()
      }
    }
  }
};
// @lc code=end

