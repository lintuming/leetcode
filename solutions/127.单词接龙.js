/*
 * @lc app=leetcode.cn id=127 lang=javascript
 *
 * [127] 单词接龙
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  let id = 0;
  const mapping = new Map();

  function canTransform(a, b) {
    let diff = 0;
    for (let i = 0; i < a.length && diff < 2; i++) {
      if (a[i] !== b[i]) diff++;
    }
    return diff === 1;
  }
  function add(w) {
    const i = id++;
    mapping.set(i, w);
    mapping.set(w, i);
  }
  for (const word of wordList) {
    if (!mapping.has(word)) {
      add(word);
    }
  }
  if (!mapping.has(endWord)) return [];
  if (!mapping.has(beginWord)) add(beginWord);
  // 构成图
  const edges = Array.from({ length: id }, () => []);
  for (let i = 0; i < id; i++) {
    for (let j = i + 1; j < id; j++) {
      if (canTransform(mapping.get(i), mapping.get(j))) {
        edges[i].push(j);
        edges[j].push(i);
      }
    }
  }
  const beginPath = [beginWord];
  const costs = Array.from({ length: id }, () => Number.MAX_SAFE_INTEGER);
  costs[mapping.get(beginWord)] = 0;
  const queue = [beginPath];
  while (queue.length) {
    const path = queue.shift();
    const lastWord = path[path.length - 1];
    if (lastWord === endWord) {
      return path.length;
    } else {
      const i = mapping.get(lastWord);
      for (let j = 0; j < edges[i].length; j++) {
        const to = edges[i][j];
        if (costs[i] + 1 <= costs[to]) {
          costs[to] = costs[i] + 1;
          const newPath = [...path, mapping.get(to)];
          queue.push(newPath);
        }
      }
    }
  }
  return []
};
// @lc code=end
