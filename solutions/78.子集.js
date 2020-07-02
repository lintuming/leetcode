/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = s1;


function s1(nums) {
  const sets = [];
  if (nums.length === 0) return sets;
  const buffer = [];

  function backTrack(from) {
    sets.push(buffer.slice());
    for (let i = from; i < nums.length; i++) {
      const n = nums[i];
      buffer.push(n);
      backTrack(i + 1);
      buffer.pop();
    }
  }
  backTrack(0);
  return sets;
}
// @lc code=end
console.log(subsets([1, 2, 3]));
