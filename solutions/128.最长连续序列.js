/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// O(2n)
var longestConsecutive = function (nums) {
  const map = new Map();
  for (const n of nums) {
    map.set(n, true);
  }
  // [3,4,5,6,1,1,2]
  let longest = 0;
  for (const n of nums) {
    if (!map.has(n - 1)) {
      let cur = n;
      let l = 1;
      while (map.has(++cur)) {
        l++;
      }
      longest = Math.max(longest, l);
    }
  }
  return longest;
};
// @lc code=end
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([5, 6, 123, 100, 101, 102, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([1, 3, 5, 2, 4]));
