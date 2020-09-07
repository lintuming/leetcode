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
var findLadders = s3

function s3(beginWord, endWord, wordList) {
  
  const graph = new Map();
  graph.set(beginWord,[])
  function transformable(w1,w2){
    let diff = 0;
    for (let i = 0; i < w1.length&&diff < 2; i++) {
      if (w1[i] !== w2[i]) {
        diff++
      }
    }
    return diff < 2;
  }
  function addPair(w1,w2){
    graph.get(w1).push(w2);
    graph.get(w2).push(w1)
  }
  const costs = new Map();
  for (let i = 0; i < wordList.length; i++) {
    const w1 = wordList[i];
    costs.set(w1,Number.MAX_SAFE_INTEGER)
    if (!graph.has(w1)) {
      graph.set(w1, []);
    }
    if (transformable(w1,beginWord)) {
      addPair(w1,beginWord)
    }
    for (let j = i + 1; j < wordList.length; j++) {
      const w2 = wordList[j]
        if (!graph.has(w2)) {
          graph.set(w2,[]);
        }
        if (transformable(w1,w2)) {
          addPair(w1,w2)
        }
    }
  }
  costs.set(beginWord,0);
  const queue = [[beginWord]];
  const ans = [];
  while (queue.length !== 0) {
    const path = queue.shift();
    const last = path[path.length - 1];
    if (last === endWord) {
      ans.push(path)
    } else {
      const to = graph.get(last);
      const newCost = costs.get(last) + 1
      for (let i = 0; i < to.length; i++) {
        if (newCost <= costs.get(to[i]) ) {
          costs.set(to[i],newCost)
          queue.push([...path,to[i]])
        }
      }
    }
  }
  return ans
};
console.log(
  findLadders("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
);

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
  console.log(edges,enums.get(beginWord))
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

// @lc code=end
