/*
 * @lc app=leetcode.cn id=274 lang=javascript
 *
 * [274] H 指数
 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  let h = 0;
  citations.sort((prev, cur) => prev - cur);
  for (let i = 0; i < citations.length; i++) {
    const c = citations[i];
    if (citations.length - i>= c) {
      h = Math.max(h, c);
    }
  }
  return h;
};
// @lc code=end

console.log(hIndex([3, 0, 6, 1, 5]));
