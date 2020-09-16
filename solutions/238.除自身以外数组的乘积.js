/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const output = [];
  let leftMult = 1;
  let rightMult = 1;
  for (let i = 0; i < nums.length;i++) {
    output[i] = leftMult;
    leftMult *= nums[i]
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] *= rightMult;
    rightMult *= nums[i]
  }
  return output
};
// @lc code=end
console.log(productExceptSelf([1,2,3,4]))