/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const hashTable = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (hashTable[num]) {
      const indexes = hashTable[num];
      if (indexes.some((index) => Math.abs(index - i) <= k)) {
        return true;
      } else {
        indexes.push(i);
      }
    } else {
      hashTable[num] = [i];
    }
  }
  return false;
};
// @lc code=end
console.log(containsNearbyDuplicate( [1,2,3,1,2,3], 2));
