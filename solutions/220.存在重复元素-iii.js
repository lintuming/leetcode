/*
 * @lc app=leetcode.cn id=220 lang=javascript
 *
 * [220] 存在重复元素 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  const hashTable = new Map();
  for (let i = 0; i < nums.length; i++) {

    const num = nums[i];
    for (let [key, value] of hashTable.entries()) {
      console.log(key,value)
      if (Math.abs(key - num) <= t <= rest && Math.abs(value - i) <= k) {
        return true;
      }
    }
    if (hashTable[num]) {
      hashTable[num].push(i);
    } else {
      hashTable[num] = [i];
    }
  }
  return false;
};
// @lc code=end
console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0));
