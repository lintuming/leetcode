/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const count = Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    const sInx = s.charCodeAt(i) - "a".charCodeAt(0);
    const tInx = t.charCodeAt(i) - "a".charCodeAt(0);
    count[sInx]++;
    count[tInx]--;
  }
  return !count.some((c) => c !== 0);
};
// @lc code=end
console.log(isAnagram('anagram','nagaram'));
console.log(isAnagram('rat','car'));
