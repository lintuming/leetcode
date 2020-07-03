/*
 * @lc app=leetcode.cn id=137 lang=javascript
 *
 * [137] 只出现一次的数字 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function (nums) {
  const map = new Map();
  for (const num of nums) {
    map.set(num, map.has(num) ? map.get(num) + 1 : 1);
  }
  for (const num of nums) {
    if (map.get(num) === 1) return num;
  }
};
// @lc code=end
console.log(singleNumber([2,2,3,2]))