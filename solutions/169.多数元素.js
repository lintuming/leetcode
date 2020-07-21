/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// 如果我们把众数记为 +1+1，
// 把其他数记为 -1−1，将它们全部加起来，
// 显然和大于 0，从结果本身我们可以看出众数比其
// 他数多。
// 由于总是存在多数元素，且多数元素出现次数大于 n/2；

var majorityElement = function (nums) {
  let candidate = null;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    // 重新选举
    if (count === 0) {
      candidate = nums[i];
    }
    count += candidate === nums[i] ? 1 : -1;
  }
  return candidate
};
// @lc code=end
console.log(majorityElement([2,2,1,1,1,2,2]))