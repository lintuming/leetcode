/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function s2(nums){
  const ans = [];
}







function s1(nums) {
  const result = [];
  const buffer = new Set();
  function backTrack() {
    if (buffer.size === nums.length) {
      return result.push([...buffer]);
    }
    for (let i = 0; i < nums.length; i++) {
      const n = nums[i];
      if (buffer.has(n)) continue;
      buffer.add(n);
      backTrack();
      buffer.delete(n)
    }
  }
  backTrack();
  return result;
};
// @lc code=end
console.log(permute([1, 2, 3]));
