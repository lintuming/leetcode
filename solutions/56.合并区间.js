/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length === 0) return intervals;
  // O(log n)
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  let lastInterval = intervals[0];
  const result = [];
  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i];
    if (interval[0] <= lastInterval[1]) {
      lastInterval = [lastInterval[0], Math.max(interval[1], lastInterval[1])];
    } else {
      result.push(lastInterval);
      lastInterval = interval;
    }
  }
  result.push(lastInterval)
  return result
};
// @lc code=end
console.log(merge([[1,4],[4,5]]))
console.log(merge([[1,3],[2,6],[8,10],[15,18]]))
console.log(merge([[1,4],[1,1],[2,5]]))
