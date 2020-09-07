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
var lengthOfLastWord = function s2(s) {
  if (s.length === 0) return 0;
  let buffer = "";
  let length = 0;
  s = s + ' ';
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === " ") {
      if (buffer.length > 0) {
        length = buffer.length;
      }
      buffer = "";
    } else {
      buffer += char
    }
  }
  return length;
};

console.log(lengthOfLastWord("Hell World"));

// function s1(s) {
//   let lastword = "";
//   let buffer = "";
//   for (let i = 0; i < s.length; i++) {
//     const char = s[i];
//     if (char === " ") {
//       if (buffer) {
//         lastword = buffer;
//         buffer = "";
//       }
//     } else {
//       buffer += char;
//     }
//   }

//   return buffer?buffer.length:lastword.length;
// };
// @lc code=end
