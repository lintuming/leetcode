/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  if (!s) return "";
  let ans = "";
  let buffer = "";
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (/\s/.test(char)) {
      if (/\s/.test(s[i+1])) {
        continue;
      }
      ans = ans ? buffer + " " + ans : buffer;
      buffer = ''
      continue;
    }
    buffer += char;
  }
  if(buffer){
    ans = ans ? buffer + " " + ans : buffer;
  }
  return ans
};
// @lc code=end
console.log(reverseWords("the sky is blue"))
console.log(reverseWords("   the    sky is blue"));
console.log(reverseWords("  hello world!  "));
console.log(reverseWords("a"));



