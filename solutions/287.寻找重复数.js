/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let vote = -Number.MAX_SAFE_INTEGER;
    let count = 1;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== vote){
        count--;
      }
      if (count) {}
    }
};
// @lc code=end

