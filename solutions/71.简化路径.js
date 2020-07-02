/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const stack = [];
  for (let i = 0; i < path.length; i++) {
    const p = path[i];
    if (p === "/" && path[i + 1] === p) {
      continue;
    }
    let j = i + 1;
    const start = j;
    while (j < path.length && path[j] !== "/") {
      j++;
    }
    const dir = path.slice(start, j);
    if (dir) {
      if (dir === "..") {
        stack.pop();
      } else if (dir === ".") {
      } else {
        stack.push(dir);
      }
    }
    i = j - 1;
  }
  return "/" + stack.join("/");
};
// @lc code=end
console.log(simplifyPath("/home/"));
console.log(simplifyPath("/../"));
console.log(simplifyPath("/home//foo/"));
console.log(simplifyPath("/a/./b/../../c/"));
console.log(simplifyPath("/a/../../b/../c//.//"));
console.log(simplifyPath("/a//b////c/d//././/.."));
console.log(simplifyPath("/..."));

