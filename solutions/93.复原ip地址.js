/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原IP地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function s2 (){}















function s1(s) {
  const result = [];
  if (s.length === 0) return result;
  const buffer = [];
  function backTrack(from) {
    if (buffer.length === 4 && from >= s.length) {
      return result.push(buffer.join("."));
    }
    if (buffer.length > 4) {
      return;
    }
    for (let i = from; i < Math.min(s.length, from + 3); i++) {
      const n = s.slice(from, i + 1);
      if (i !== from && s[from] === "0") return;
      const rest = s.length - i - 1;
      const restMost = 3 * (4 - buffer.length - 1);
      if (n >= 0 && n <= 255 && rest <= restMost) {
        buffer.push(n);
        backTrack(i + 1);
        buffer.pop();
      }
    }
  }
  backTrack(0);
  return result;
};
// @lc code=end
console.log(restoreIpAddresses("25525511135"));
console.log(restoreIpAddresses("010010"));

