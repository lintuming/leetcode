/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  if (!s) return [];
  const ans = [];
  const buffer = [];
  function isPalindrome(w) {
    if (w.length === 1) return true;
    let left = 0,
      right = w.length - 1;
    while (left <= right) {
      if (w[left] !== w[right]) return false;
      left++;
      right--;
    }
    return true;
  }
  function backTrack(rest) {
    if (!rest) {
      return ans.push(buffer.slice());
    }
    for (let i = 0; i < rest.length; i++) {
      const w = rest.slice(0, i + 1);
      if (isPalindrome(w)) {
        buffer.push(w);
        backTrack(rest.slice(i + 1));
        buffer.pop();
      }
    }
  }
  backTrack(s);
  return ans
};
// @lc code=end
// aabaa
console.log(partition('aab'))
console.log(partition('aabaa'))

