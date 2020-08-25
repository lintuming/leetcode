/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  const ans = [];
  if(words.length === 0) {
    return ans
  }
  const wordLen = words[0].length;
  const wordsLength = words.length * wordLen;
  const hashTable = new Map();
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    hashTable.set(word, hashTable.has(word) ? hashTable.get(word) + 1 : 1);
  }
  function match(substr, index) {
    if (index === wordsLength) return true;
    const w = substr.slice(index, index+wordLen);
    let count;
    if (hashTable.has(w) && (count = hashTable.get(w)) > 0) {
      
      hashTable.set(w, count - 1);
      const subMatch = match(substr, index + wordLen);
      hashTable.set(w, count);
      return subMatch;
    } else {
      return false;
    }
  }
  for (let i = 0; i <= s.length - wordsLength; i++) {
    if (match(s.slice(i, i + wordsLength), 0)) {
      ans.push(i);
    }
  }
  return ans;
};
// @lc code=end
console.log(findSubstring("barfoothefoobarman", ["foo", "bar"]));
console.log(findSubstring("wordgoodgoodgoodbestword", ["word","good","best","word"]));

