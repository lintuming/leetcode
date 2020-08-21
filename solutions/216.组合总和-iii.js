/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const ans = [];
  const buffer = [];
  function backTrack(start, rest, sum) {
    if (rest < 0 || sum > n) {
      return;
    }
    if (rest === 0 && sum === n) {
      return ans.push(buffer.slice());
    }

    for (let i = start; i <= 9; i++) {
      buffer.push(i);
      backTrack(i + 1, rest-1, sum + i);
      buffer.pop();
    }
  }
  backTrack(1, k, 0);
  return ans;
};
// @lc code=end
console.log(combinationSum3(3, 7));
console.log(combinationSum3(3, 9));

