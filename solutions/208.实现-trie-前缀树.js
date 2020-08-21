/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var Trie = function () {
  this.trie = {};
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let trie = this.trie;
  for (const char of word) {
    if (trie[char]) {
      trie = trie[char];
    } else {
      trie[char] = {};
      trie = trie[char]
    }
  }
  trie.end = true;
  console.log(this.trie)
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let trie = this.trie;
  for (const char of word) {
    if (trie[char]) {
      trie = trie[char];
    } else {
      return false;
    }
  }
  return !!trie.end
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let trie = this.trie;
  for (const char of prefix) {
    if (trie[char]) {
      trie = trie[char];
    } else {
      return false;
    }
  }
  return true
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end

const trie = new Trie();
trie.insert('apple');
console.log(trie.search('apple'))
console.log(trie.search('app'))
console.log(trie.startsWith('app'))
console.log(trie.insert('app'))
console.log(trie.search('app'))



