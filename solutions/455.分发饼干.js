/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  let i = 0,
    j = 0;
  s.sort((a,b)=>a-b);
  g.sort((a,b)=>a-b);
  while (i < g.length && j < s.length) {
    const eat = g[i];
    const size = s[j];
    if (size >= eat) {
      i++;
      j++;
    } else {
      j++;
    }
  }
  return i;
};
// @lc code=end
console.log(findContentChildren([10, 9, 8, 7], [5, 6, 7, 8]));
