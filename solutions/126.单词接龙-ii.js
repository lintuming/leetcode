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
var findLadders = s2;

function s2(beginWord, endWord, wordList) {
  let id = 0;
  const enums = new Map();
  function add(word) {
    const i = id++;
    enums.set(word, i);
    enums.set(i, word);
  }
  function canTransform(a, b) {
    let diff = 0;
    for (let i = 0; i < a.length && diff < 2; i++) {
      if (a[i] !== b[i]) {
        diff++;
      }
    }
    return diff === 1;
  }
  const ans = [];
  for (const word of wordList) {
    if (!enums.has(word)) {
      add(word);
    }
  }
  if (!enums.has(endWord)) return ans;
  if (!enums.has(beginWord)) {
    add(beginWord);
  }
  const edges = Array.from({ length: id }, () => []);
  for (let i = 0; i < id; i++) {
    for (let j = i + 1; j < id; j++) {
      if (canTransform(enums.get(i), enums.get(j))) {
        edges[i].push(j);
        edges[j].push(i);
      }
    }
  }
  const beginPath = [beginWord];
  const queue = [beginPath];
  // beginword 到 wordList任一一个word的距离
  const costs = Array.from({ length: id }, () => Number.MAX_SAFE_INTEGER);
  costs[enums.get(beginWord)] = 0;
  while (queue.length) {
    const path = queue.shift();
    const lastWord = path[path.length - 1];
    if (lastWord === endWord) {
      ans.push(path);
    } else {
      const i = enums.get(lastWord);
      for (let j = 0; j < edges[i].length; j++) {
        const to = edges[i][j];
        if (costs[i] + 1 <= costs[to]) {
          costs[to] = costs[i] + 1;
          const newPath = [...path, enums.get(to)];
          queue.push(newPath);
        }
      }
    }
  }
  return ans
}

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
