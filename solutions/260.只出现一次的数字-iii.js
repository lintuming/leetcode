/*
 * @lc app=leetcode.cn id=260 lang=javascript
 *
 * [260] 只出现一次的数字 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  const ans = [];

  const mask = nums.reduce((prev, cur) => prev ^ cur) ;
  const bitMask = mask & (-mask)
  let xor = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] & (bitMask)) {
      xor ^= nums[i];
    }
  }
  return [xor,mask ^ xor];
};
// @lc code=end

console.log(singleNumber([1, 2, 1, 3, 2, 5]));