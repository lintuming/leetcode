/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let place = 0;
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] === val) {
      i++;
    }
    if (i < nums.length) {
      nums[place] = nums[i];
      place++;
    }
  }
  nums.length = place;
  return place;
};
// @lc code=end
console.log(removeElement([3,2,2,3], 3));
