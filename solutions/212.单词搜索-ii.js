/*
 * @lc app=leetcode.cn id=212 lang=javascript
 *
 * [212] 单词搜索 II
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

class Trie {
  constructor() {
    this.t = {};
  }
  startWith(word) {
    let t = this.t;
    for (let w of word) {
      if (t[w]) {
        t = t[w];
      } else {
        return false;
      }
    }
    return true;
  }
  addWord(word) {
    let t = this.t;
    for (let w of word) {
      if (t[w]) {
        t = t[w];
      } else {
        t = t[w] = {};
      }
    }
    t.end = true;
  }
  search(word) {
    let t = this.t;
    for (let w of word) {
      if (t[w]) {
        t = t[w];
      } else {
        return false;
      }
    }
    return t.end === true;
  }
  delete(word) {
    let t = this.t;
    for (let w of word) {
      if (t[w]) {
        t = t[w];
      } else {
        return;
      }
    }
    t.end = false;
  }
}
var findWords = function (board, words) {
  const ans = [];
  if (words.length <= 0 || board.length <= 0) {
    return ans;
  }
  const trie = new Trie();
  let yMax = board.length,
    xMax = board[0].length;
  for (let word of words) {
    trie.addWord(word);
  }

  function traverse(x, y, word) {
    if (
      x < 0 ||
      y < 0 ||
      x >= xMax ||
      y >= yMax ||
      board[y][x] === "." ||
      !trie.startWith(word)
    ) {
      return;
    }

    const w = board[y][x];
    board[y][x] = ".";
    word = word + w;
    if (trie.search(word)) {
      ans.push(word);
      trie.delete(word);
    }
    traverse(x + 1, y, word);
    traverse(x - 1, y, word);
    traverse(x, y + 1, word);
    traverse(x, y - 1, word);
    board[y][x] = w;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      traverse(j, i, "");
    }
  }
  return ans;
};
// @lc code=end

console.log(
  findWords(
    [
      ["o", "a", "a", "n"],
      ["e", "t", "a", "e"],
      ["i", "h", "k", "r"],
      ["i", "f", "l", "v"],
    ],
    ["oath", "pea", "eat", "rain"]
  )
);
