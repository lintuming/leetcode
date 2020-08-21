/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
 
  let i = 0,
    j = 0;
  let sum = 0;
  let ans = Number.MAX_SAFE_INTEGER;

  while (j < nums.length) {
    sum += nums[j];
    while (sum >= s) {
      ans = Math.min(ans, j - i + 1);
      sum -= nums[i];
      i++;
    }
    j++;
  }
  return ans === Number.MAX_SAFE_INTEGER ?0:ans
};
// @lc code=end
