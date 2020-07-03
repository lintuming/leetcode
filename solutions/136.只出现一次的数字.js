/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = s1

// use bit 有限制
function s1(nums) {

  return nums.reduce((prev, cur) => prev ^ cur, 0);
};
// @lc code=end
console.log(singleNumber([Math.pow(2,30),1,2,1,2]))