/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  const ans = [];
  if (nums.length === 0) return ans;
  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;
    while (j < nums.length && nums[j] === nums[j - 1] + 1) {
      j++
    }
    ans.push(nums[i] + (j === i + 1? '': `->${nums[j-1]}`));
    i = j - 1;
  }
  return ans;
};
// @lc code=end

[
  [0,1,2,4,5,7],
  [0,2,3,4,6,8,9]
].forEach(input => console.log(summaryRanges(input)))
