/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let lastword = "";
  let buffer = "";
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === " ") {
      if (buffer) {
        lastword = buffer;
        buffer = "";
      }
    } else {
      buffer += char;
    }
  }

  return buffer?buffer.length:lastword.length;
};
// @lc code=end
console.log(lengthOfLastWord("Hello World Sb   "));
