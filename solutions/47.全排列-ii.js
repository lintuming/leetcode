/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const result = [];
  const buffer = [];
  function backTrack(arr) {
    if (arr.length === 0) {
      return result.push(buffer.slice());
    }
    const used = {}
    for (let i = 0; i < arr.length; i++) {
      const n = arr[i]
      if (used[n]) continue;
      used[n] = true
      buffer.push(arr[i]);
      backTrack(arr.slice(0, i).concat(arr.slice(i + 1)));
      buffer.pop()
    }
  }
  backTrack(nums)
  return result
};
// @lc code=end
console.log(permuteUnique([3,3,0,3]))