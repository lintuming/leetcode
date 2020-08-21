/*
 * @lc app=leetcode.cn id=211 lang=javascript
 *
 * [211] 添加与搜索单词 - 数据结构设计
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var WordDictionary = function () {
  this.trie = {};
};

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let t = this.trie;
  for (let w of word) {
    if (t[w]) {
      t = t[w];
    } else {
      t = t[w] = [];
    }
  }
  t.end = true;
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {

  function _search(trie,word){

    for (let i = 0; i < word.length; i++) {
      const w = word[i]
      if (w === ".") {
        for( let key in trie) {
          if(key === 'end'){
            continue;
          }
          if(_search(trie[key],word.slice(i+1))){
            return true
          }
        }
        return false
      } else {
        if (trie[w]) {
          trie = trie[w];
        } else {
          return false;
        }
      }
    }
    return trie.end === true
  }
  return _search(this.trie,word)
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
// @lc code=end

const dict = new WordDictionary();
dict.addWord('bad');
dict.addWord('dad');
dict.addWord('mad');
console.log(dict.search('pad'))
console.log(dict.search('bad'))
console.log(dict.search('.ad'))
console.log(dict.search('b..'))
console.log(dict.search('b..'))
console.log(dict.search('m.d'))




