/*
 * @lc app=leetcode.cn id=87 lang=javascript
 *
 * [87] 扰乱字符串
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = solution1;

// bad performences
function solution1(s1, s2) {
  const buffer = {};
  function recurse(s1, s2) {
    if (s1.length !== s2.length) {
      return false;
    }
    const key = s1 + ":" + s2;
    if (buffer[key] != null) return buffer[key];
    if (s1 === s2) {
      buffer[key] = true;
      return buffer[key];
    }
    if (s1.length === 1) {
      buffer[key] = s1 === s2;
      return buffer[key];
    }
    for (let i = 0; i < s1.length - 1; i++) {
      if (
        (recurse(s1.slice(0, i + 1), s2.slice(0, i + 1)) &&
          recurse(s1.slice(i + 1), s2.slice(i + 1))) ||
        (recurse(s1.slice(0, i + 1), s2.slice(-i - 1)) &&
          recurse(s1.slice(i + 1), s2.slice(0, -i - 1)))
      ) {
        buffer[key] = true;
        return buffer[key];
      }
    }
    buffer[key] = false;
    return false;
  }
  return recurse(s1, s2);
}
// @lc code=end
// great eatrg
console.log(isScramble("great", "rgtae"));
console.log(isScramble("abcde", "caebd"));
