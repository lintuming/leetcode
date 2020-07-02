/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 第k个排列
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */

var getPermutation = function (n, k) {
  let i = 0;
  const used = new Set();
  function backTrack() {
    if (used.size === n) {
      i++;
      if (i === k) {
        return [...used].join("");
      } else {
        return;
      }
    }
    for (let i = 1; i <= n; i++) {
      if (used.has(i)) {
        continue;
      }
      used.add(i);
      const r = backTrack();
      used.delete(i);
      if (r) {
        return r;
      }
    }
  }
  return backTrack();
};
// @lc code=end
console.log(getPermutation(3, 3));
console.log(getPermutation(4, 9));

