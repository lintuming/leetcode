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
var combine = function s2(n, k) {
  const ans = [];
  if (k === 0) return ans;
  k = Math.min(n, k);
  const buffer = [];
  function backTrack(from){
    if (buffer.length === k) {
      return ans.push(buffer.slice())
    }
    for (let i = from; i <= n; i++) {
      buffer.push(i);
      backTrack(i + 1);
      buffer.pop();
    }
  }
  backTrack(1);
  return ans
};




























function s1(n, k) {
  const groups = [];
  if (k === 0 || n === 0) return groups;
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
}
// @lc code=end
console.log(combine(4, 2));
console.log(combine(4, 4));
console.log(combine(4, 6));
console.log(combine(0, 6));
console.log(combine(3, 6));
