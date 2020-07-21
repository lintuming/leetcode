/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
  let ans = "";
  while (n !== 0) {
    // 封26进1，由于 没有0，所以需要减一
    // 0 -> A,25 -> Z
    n--;
    let code = n % 26;
    ans = String.fromCharCode(65 + code) + ans;
    n = Math.floor(n / 26);
  }
  return ans
};
// @lc code=end
console.log(convertToTitle(28));
console.log(convertToTitle(701));
console.log(convertToTitle(18277));

