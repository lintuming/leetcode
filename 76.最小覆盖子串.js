/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let lastRangeStart = 0;
  let lastRangeEnd = 0;
  //大小写
  const counter = {};
  for (const char of t) {
    counter[char] = (counter[char] || 0) + 1;
  }
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (counter[c] != null) {
      counter[c]--;
    }
    
  }
};
// @lc code=end

// '# A D O $ B $ E % |C % ODEB A # N C|' 'AaBCC'

// # A # D O $B$ E |C| O D E $B$ #A# N |C| ABC

console.log(minWindow("ADOBECODEBANC", "ABC"));
