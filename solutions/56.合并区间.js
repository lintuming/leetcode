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
var merge = function s2(intervals) {
  if (intervals.length === 0) return [];
  intervals.sort(([a], [b]) => a - b);
  const stack = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = stack[stack.length - 1];
    const [iStart, iEnd] = intervals[i];
    if (iStart <= end) {
      stack[stack.length - 1][0] = Math.min(start, iStart);
      stack[stack.length - 1][1] = Math.max(end, iEnd);
    } else {
      stack.push(intervals[i]);
    }
  }
  return stack;
};
console.log(
  merge([
    [1, 4],
    [4, 5],
  ])
);
console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
console.log(
  merge([
    [1, 4],
    [1, 1],
    [2, 5],
  ])
);

function s1(intervals) {
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
  result.push(lastInterval);
  return result;
}
// @lc code=end
