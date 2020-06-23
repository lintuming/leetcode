/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const result = [];
  const buffer = [];
  candidates.sort((a,b)=>a-b);
  function backTrack(from, total) {
    if (total === target) {
      return result.push(buffer.slice());
    }
    if (total > target) {
      return;
    }
    for (let i = from; i < candidates.length; i++) {
      if(i>from&&candidates[i] === candidates[i-1])continue;
      buffer.push(candidates[i]);
      backTrack(i + 1,total+candidates[i]);
      buffer.pop();
    }
  }
  backTrack(0, 0);
  return result;
};
// @lc code=end
