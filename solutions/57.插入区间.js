/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function s2(intervals, newInterval) {
  if (intervals.length === 0) {
    return [newInterval];
  }
  const l = intervals.length;
  const ans = [];
  let i = 0;
  for (; i < l; i++) {
    const interval = intervals[i];
    if (newInterval[0] < interval[0]) {
      break;
    }
    ans.push(interval)
  }
  const lastInterval = ans[ans.length - 1];
  if (lastInterval && newInterval[0] <= lastInterval[1]) {
    lastInterval[0] = Math.min(newInterval[0], lastInterval[0]);
    lastInterval[1] = Math.max(newInterval[1], lastInterval[1]);
  } else {
    ans.push(newInterval);
  }
  for (; i < l; i++) {
    const interval = intervals[i];
    const lastInterval = ans[ans.length - 1];
    if (lastInterval && interval[0] <= lastInterval[1]) {
      lastInterval[0] = Math.min(interval[0], lastInterval[0]);
      lastInterval[1] = Math.max(interval[1], lastInterval[1]);
    } else {
      ans.push(interval);
    }
  }

  return ans;
};

function s1(intervals, newInterval) {
  if (intervals.length === 0) return [newInterval];
  const result = [];
  let lastInterval = null;
  if (intervals[intervals.length - 1][0] < newInterval[0]) {
    intervals.push(newInterval);
    newInterval = null;
  }
  for (let i = 0; i < intervals.length; i++) {
    let interval = intervals[i];
    if (newInterval && newInterval[0] <= interval[0]) {
      interval = newInterval;
      newInterval = null;
      i--;
    }
    if (lastInterval) {
      if (interval[0] <= lastInterval[1]) {
        lastInterval = [
          lastInterval[0],
          Math.max(lastInterval[1], interval[1]),
        ];
      } else {
        result.push(lastInterval);
        lastInterval = interval;
      }
    } else {
      lastInterval = interval;
    }
  }
  if (lastInterval) {
    result.push(lastInterval);
  }
  return result;
}
// @lc code=end
console.log(insert([[1, 3]], [2, 5]));
console.log(
  insert(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5]
  )
);
console.log(
  insert(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [4, 8]
  )
);
