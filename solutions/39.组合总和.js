/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function s2(candidates, target) {
  const ans = [];
  const buffer = [];
  function backTrack(from, sum) {
    if (sum >= target) {
      return sum === target ? ans.push(buffer.slice()) : void 0;
    }
    for (let i = from; i < candidates.length; i++) {
      buffer.push(candidates[i]);
      backTrack(i, sum + candidates[i]);
      buffer.pop();
    }
  }
  backTrack(0, 0);
  return ans;
};

function s1(candidates, target) {
  const result = [];
  const buffer = [];
  function backTrack(from, total) {
    if (total === target) {
      return result.push(buffer.slice());
    }
    if (total > target) {
      return;
    }
    for (; from < candidates.length; from++) {
      buffer.push(candidates[from]);
      backTrack(from, total + candidates[from]);
      buffer.pop();
    }
  }
  backTrack(0, 0);
  return result;
}
// @lc code=end
console.log(combinationSum([2, 3, 6, 7], 7));
