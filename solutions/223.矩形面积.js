/*
 * @lc app=leetcode.cn id=223 lang=javascript
 *
 * [223] 矩形面积
 */

// @lc code=start
/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function (A, B, C, D, E, F, G, H) {
  let x1 = Math.max(A, E);
  let y1 = Math.max(B, F);
  let x2 = Math.min(C, G);
  let y2 = Math.min(D, H);
  let overlap;
  function computeRect(a,b,c,d){
    return Math.abs(a - c) * Math.abs(b - d)
  }
  if (x1 >= x2 || y1 >= y2) {
    overlap = 0;
  } else {
    overlap = Math.abs(x1 - x2) * Math.abs(y1 - y2);
  }
  return computeRect(A,B,C,D) + computeRect(E,F,G,H) - overlap
};
// @lc code=end
console.log(computeArea(-3, 0, 3, 4, 0, -1, 9, 2));
