/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function s2(nums) {
  const ans = [];
  nums.sort((a, b) => a - b);
  const buffer = [];
  const indexThatUsed = [];
  function backTrack() {
    if (buffer.length === nums.length) {
      ans.push(buffer.slice());
      return;
    }
    const used = {};
    for (let i = 0; i < nums.length; i++) {
      if (indexThatUsed[i] === true) {
        continue;
      }
      if (used[nums[i]]) continue;
      used[nums[i]] = true;
      indexThatUsed[i] = true;
      buffer.push(nums[i]);
      backTrack(i + 1);
      indexThatUsed[i] = false;
      buffer.pop();
    }
  }
  backTrack();
  return ans;
};

function s1(nums) {
  const result = [];
  const buffer = [];
  function backTrack(arr) {
    if (arr.length === 0) {
      return result.push(buffer.slice());
    }
    const used = {};
    for (let i = 0; i < arr.length; i++) {
      const n = arr[i];
      if (used[n]) continue;
      used[n] = true;
      buffer.push(arr[i]);
      backTrack(arr.slice(0, i).concat(arr.slice(i + 1)));
      buffer.pop();
    }
  }
  backTrack(nums);
  return result;
}
// @lc code=end
console.log(permuteUnique([0, 3, 3, 3]));
