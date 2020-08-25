/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hahsTable = new Map();
  for (let i = 0; i < nums.length; i++) {
    const rest = target - nums[i];
    if (hahsTable.has(rest)) {
      return [i, hahsTable.get(rest)];
    } else {
      hahsTable.set(nums[i], i);
    }
  }
};
// @lc code=end
