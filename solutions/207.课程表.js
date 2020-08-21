/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const graph = new Map();

  for (let i = 0; i < prerequisites.length; i++) {
    const pre = prerequisites[i];
    if (graph.has(pre[0])) {
      graph.get(pre[0]).push(...pre.slice(1));
    } else {
      graph.set(pre[0], pre.slice(1));
    }
  }
  console.log(graph);
  const learn = {};

  function finish(course) {
    if (!graph.has(course)) {
      return true;
    }
    if (learn[course]) {
      return false;
    }
    learn[course] = true;
    const prerequisite = graph.get(course);
    if (finishCourses(prerequisite)) {
      learn[course] = false;
      graph.delete(course);
      return true;
    } else {
      return false;
    }
  }
  function finishCourses(courses) {
    return courses.every((course) => finish(course));
  }
  return finishCourses(prerequisites.map(([course]) => course));
};
// @lc code=end

console.log(
  canFinish(4, [
    [2, 0],
    [1, 0],
    [3, 1],
    [3, 2],
    [1, 3],
  ])
);
