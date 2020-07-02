/*
 * @lc app=leetcode.cn id=126 lang=javascript
 *
 * [126] 单词接龙 II
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = s1;

function s2(beginWord, endWord, wordList) {}

// timeout 
function s1(beginWord, endWord, wordList) {
  const ans = [];
  const buffer = [beginWord];
  let min = Number.MAX_SAFE_INTEGER;
  if (wordList.indexOf(endWord) < 0) {
    return ans;
  }
  const usages = {};
  function canTransform(a, b) {
    for (let i = 0; i < a.length; i++) {
      if (
        a.slice(0, i) === b.slice(0, i) &&
        a.slice(i + 1) === b.slice(i + 1)
      ) {
        return true;
      }
    }
    return false;
  }
  function backTrack(w) {
    if (w === endWord && buffer.length <= min) {
      min = Math.min(buffer.length, min);
      return ans.push(buffer.slice());
    }
    if (buffer.length >= min) return;
    for (let i = 0; i < wordList.length; i++) {
      const str = wordList[i];
      if (usages[str] || !canTransform(w, str)) continue;
      buffer.push(str);
      usages[str] = true;
      backTrack(str);
      buffer.pop();
      usages[str] = false;
    }
  }
  backTrack(beginWord);
  return ans.filter((a) => a.length === min);
}
// @lc code=end
console.log(
  findLadders("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
);
