/*
 * @lc app=leetcode.cn id=210 lang=javascript
 *
 * [210] 课程表 II
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const order = [];
  const deps = {};
  for (let i = 0; i < prerequisites.length; i++) {
    const r = prerequisites[i];
    if (deps[r[0]]) {
      deps[r[0]].push(r[1]);
    } else {
      deps[r[0]] = [r[1]];
    }
  }
  const currentlyLearn = {};
  const didLearn = {};
  function learn(course) {
    if (currentlyLearn[course]) {
      return false;
    }
    if (didLearn[course]) {
      return true;
    }
    if (!deps[course]) {
      order.push(course);
      didLearn[course] = true
      return true;
    }
    const dep = deps[course];
    currentlyLearn[course] = true;
    for (let i = 0; i < dep.length; i++) {
      if (!learn(dep[i])) {
        return false;
      }
    }
    didLearn[course] = true;
    currentlyLearn[course] = false;
    order.push(course)
    return true;
  }
  for (let i = 0; i < numCourses; i++) {
    if (!learn(i)) {
      return [];
    }
  }
  return order
};
// @lc code=end
console.log(findOrder(4,[[1,0],[2,0],[3,1],[3,2]]))