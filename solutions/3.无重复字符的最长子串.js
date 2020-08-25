/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let ans = 0;
  let i = 0;
  let l = 0; // 目前到下标i为止最长的子字符窜changdu
  const hashTable = new Map();
  let char;
  for (let i = 0; i < s.length; i++) {
    char = s[i];
    if (hashTable.has(char)) {
      const prevIndex = hashTable.get(char);
      const prevToNow = i - prevIndex;
      if (l >= prevToNow) {
        l = prevToNow - 1;
      }
    }
    l++;
    ans = Math.max(l, ans);
    hashTable.set(char, i);
  }
  return ans
};
// @lc code=end
console.log(lengthOfLongestSubstring('pwwkew'))