/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const groups = [];
  if (k === 0||n===0) return groups;
  const buffer = [];
  function backTrack(start) {
    if (buffer.length === Math.min(n, k)) {
      return groups.push(buffer.slice());
    }
    for (let i = start; i <= n; i++) {
      buffer.push(i);
      backTrack(i + 1);
      buffer.pop();
    }
  }
  backTrack(1);
  return groups;
};
// @lc code=end
console.log(combine(4, 3));
console.log(combine(4, 4));
console.log(combine(4, 6));
console.log(combine(0, 6));
console.log(combine(3, 6));


