/*
 * @lc app=leetcode.cn id=187 lang=javascript
 *
 * [187] 重复的DNA序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = s2;

function s2(s) {
  const ans = new Set();
  const map = new Map();
  for (let i = 0; i + 10 <= s.length; i++) {
    const subStr = s.slice(i, i + 10);
    if (map.has(subStr)) {
      ans.add(subStr);
    }
    map.set(subStr, true);
  }
  return [...ans]
}

// time out
function s1(s) {
  const ans = [];
  const markup = {};
  for (let i = 0; i + 10 <= s.length; i++) {
    const subStr = s.slice(i, i + 10);
    if (markup[subStr]) continue;
    markup[subStr] = true;
    const reg = new RegExp(subStr, "g");
    if (reg.test(s.slice(i + 1))) {
      ans.push(subStr);
    }
  }
  return ans;
}
// @lc code=end
console.log(findRepeatedDnaSequences('AAAAAAAAAAAAA'))