/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const subsets = [];
  const buffer = [];
  nums.sort((a, b) => a - b);
  function backTrack(from) {
    subsets.push(buffer.slice());
    for (let i = from; i < nums.length; i++) {
      if (i > from && nums[i] === nums[i - 1]) continue;
      buffer.push(nums[i]);
      backTrack(i + 1);
      buffer.pop();
    }
  }
  backTrack(0);
  return subsets;
};
// @lc code=end
console.log(subsetsWithDup([1, 2, 2]));
console.log(subsetsWithDup([4, 4, 4, 1, 4]));

