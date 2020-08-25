/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let place = 0;
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] === nums[i+1]) {
      i++
    }
    nums[place] = nums[i]
    place++
  }
  nums.length = place
  return place
};
// @lc code=end

console.log(removeDuplicates([1,1]))
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
